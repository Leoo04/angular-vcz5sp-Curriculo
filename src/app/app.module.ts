import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { appC } from './app.component';
import { FormacaoAcademicaComponent } from './formacao-academica/formacao-academica.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';

@NgModule({
  declarations: [
    appC,
    DadosPessoaisComponent,
    ExperienciasComponent,
    FormacaoAcademicaComponent,
    HabilidadesComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [appC],
})
export class AppModule {}
