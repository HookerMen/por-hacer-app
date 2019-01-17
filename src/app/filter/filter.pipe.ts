import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/models/todo.model';
import { filtrosValidos } from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): any {
    switch( filtro ){
      case 'completados':
        return todos.filter( todoEdit => todoEdit.completado == true);
      case 'pendientes':
        return todos.filter( todoEdit => todoEdit.completado == false);
      default:
        return todos;
    } 
  }

}
