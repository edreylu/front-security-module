import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavComponent,
    UsuarioFormComponent,
    UsuarioListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }