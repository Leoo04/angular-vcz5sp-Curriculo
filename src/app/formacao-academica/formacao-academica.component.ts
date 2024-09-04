import { Component } from '@angular/core';

@Component({
  selector: 'app-formacao-academica',
  templateUrl: './formacao-academica.component.html',
  styleUrls: ['./formacao-academica.component.css']
})
export class FormacaoAcademicaComponent   
 {
  formacoes = [
    {
      instituicao: 'Faculdade SENAI',
      curso: 'Técnologo em Análise e desenvolvimento de Sistemas',
      conclusao: '2025'
    },
  ];
}