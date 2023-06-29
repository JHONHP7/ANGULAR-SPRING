import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoFormComponent } from './curso-form/curso-form.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  //quando não tiver nada depois do endereço vai renderizar o CursosComponent
  { path: '', component: CursosComponent },
  //criando cota par ao botão de editar
  { path: 'new', component: CursoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
