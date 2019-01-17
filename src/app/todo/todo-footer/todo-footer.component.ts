import { Component, OnInit } from '@angular/core';
import * as fromFilterActions from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app/app.reducers';
import { Todo } from '../models/todo.model';
import * as formTodoActions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pendientes: number;
  
  filtrosValidos: fromFilterActions.filtrosValidos[] = ['todos', 'completados','pendientes']
  filtroActual: fromFilterActions.filtrosValidos;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state =>{
      this.filtroActual = state.filter;
      this.ContarPendientes( state.todos );
    });
  }

  CambiarFiltro(nuevoFiltro: fromFilterActions.filtrosValidos): void {
    const accion = new fromFilterActions.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  ContarPendientes( todos: Todo[]): void {
    if( todos.length != 0){
      this.pendientes = todos.filter( 
        todoEdit => todoEdit.completado == false
      ).length
    } else { 
      this.pendientes = 0;
    }
  }

  BorrarCompletadas(): void{
    const accion = new formTodoActions.BorrarAllCompletadasAction();
    this.store.dispatch(accion);
  }

}
