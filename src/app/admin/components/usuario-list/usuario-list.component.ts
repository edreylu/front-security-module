import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/service/usuario.model';
import { UsuarioService } from 'src/app/core/service/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort;
  dataSource!: MatTableDataSource<User>;
  users!: User[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['noUsuario', 'userName'];
  constructor(
    private userService: UsuarioService
  ) {
    this.getUsers();
    
  }

  getUsers(){
   this.userService.getAllUsers()
      .subscribe(users => {
        this.users = users;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
    }

  ngAfterViewInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
