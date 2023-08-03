import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private API_USUARIO = "http://localhost:8080/usuarios";

  http = inject(HttpClient);

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API_USUARIO);
  }

  create(data: Usuario){
    return this.http.post<Usuario>(this.API_USUARIO, data);
  }

  upadate(data: Usuario){
      return this.http.put(this.API_USUARIO, data);
  }

  delete(id:string){
    return this.http.delete(`${this.API_USUARIO}/${id}`);
  }

}
