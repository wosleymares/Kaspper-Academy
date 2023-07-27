import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent {
    public nome: string = "Wosley Mares"
    public idade: number = 38
    public email: string = "wosley.genin@gmail.com"

}
