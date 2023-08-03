import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/app/services/users.service';
import { Usuario } from 'src/app/models/usuario.model';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            MatTableModule,
            MatButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatCardModule,
            MatIconModule],

  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  usersService = inject(UsersService);
  usuarios: Usuario[] = [];
  colunas: string[] = ["nome", "email"];

  usuario: Usuario = {};

  form!:FormGroup;
  fb = inject(FormBuilder);

  ngOnInit(): void{
    this.carregaUsers();
    this.createForm();
  }

  save(){
    this.usersService.create(this.form.value);
  }

  createForm(){
    this.form = this.fb.group({
      id:[''],
      nome:['', [Validators.required, Validators.min(5)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  carregaUsers() {
    this.usersService
                      .getUsuarios()
                      .subscribe(dados => (this.usuarios = dados));
  }

  novoUsuario(){}

}
