import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(){
    let headers = new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBRE1JTiIsInJvbGVzIjpbIlJPTEVfQURNSU4iLCJST0xFX1VTRVIiXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDg2L2lubWVzL2FwaS9sb2dpbiIsImV4cCI6MTYzMDM0NjQxMH0.FVKn3HlhwmO_DkInXBWix6L5PO-XXydS5W0x72n4l6E'
    });
    return this.http.get<User[]>(`${environment.url_api}/usuarios/`, {headers});
  }

  getUser(id: number){
    return this.http.get<User>(`${environment.url_api}/usuarios/${id}`);
  }

  createUser(user: User){
    return this.http.post(`${environment.url_api}/usuarios/`, user);
  }

  updateUser(id: number, changes: Partial<User>){
    return this.http.put(`${environment.url_api}/usuarios/${id}`, changes);
  }

  deleteUser(id: number, enabled: number){
    return this.http.delete(`${environment.url_api}/usuarios/${id}/${enabled}`);
  }
}
