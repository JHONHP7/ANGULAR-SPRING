import { Component } from '@angular/core';
import { Curso } from '../model/curso';
import { CursosService } from '../services/cursos.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  cursos$: Observable <Curso[]> ;

  displayedColumns = ['name','category']

  //cursosService  : CursosService;

  constructor(
    public dialog: MatDialog,
    private cursosService  : CursosService ){
    //this.cursosService = new CursosService();
    this.cursos$ = this.cursosService.list()
    .pipe( catchError(error =>{
      this.onError('Erro ao carregar cursos.');
      return of([])
    } )
    );
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });

}
}
