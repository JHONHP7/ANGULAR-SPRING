import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //caminho vazio e pathMatch para garantir que se não tiver nada ele vai redirecionar pra cursos
  { path:'', pathMatch: 'full', redirectTo: 'cursos' },
  //agora fazendo a rota pra cursos (Lazy loading basics)
  /* Esta é a segunda rota definida. Ela especifica que, quando o caminho da URL corresponder a 'cursos',
   o Angular deve carregar o módulo 'CursosModule' usando o conceito de "lazy loading
   Essas são as duas rotas definidas no exemplo. A primeira redireciona para 'cursos' se a URL estiver vazia,
    e a segunda carrega o módulo 'CursosModule' quando o caminho da URL for 'cursos'. */
  { path: 'cursos',
  loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
