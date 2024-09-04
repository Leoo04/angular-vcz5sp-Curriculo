import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']   

})
export class ExperienciasComponent   
 {
  experiencias = [
    {
      empresa: 'Empresa XYZ',
      cargo: 'Desenvolvedor Front-end',
      periodo: '2022 - Presente',
      descricao: 'Desenvolvimento de aplicações web utilizando Angular...'
    },
    // Adicione mais experiências aqui
  ];
}