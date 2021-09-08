import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../auth/token-storage.service';
import { User } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token.getToken()}`})
  };

  constructor(
    private http: HttpClient,
    private token: TokenStorageService
  ) { }

  getAllUsers(){
    console.log(this.httpOptions)
    return this.http.get<User[]>(`${environment.url_api}/usuarios/`, this.httpOptions);
  }

  getUser(id: number){
    return this.http.get<User>(`${environment.url_api}/usuarios/${id}`, this.httpOptions);
  }

  createUser(user: User){
    return this.http.post(`${environment.url_api}/usuarios/`, user, this.httpOptions);
  }

  updateUser(id: number, changes: Partial<User>){
    return this.http.put(`${environment.url_api}/usuarios/${id}`, changes, this.httpOptions);
  }

  deleteUser(id: number, enabled: number){
    return this.http.delete(`${environment.url_api}/usuarios/${id}/${enabled}`, this.httpOptions);
  }
}
