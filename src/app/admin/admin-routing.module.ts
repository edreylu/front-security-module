import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: UsuarioFormComponent
      },
      {
        path: 'list',
        component: UsuarioListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }