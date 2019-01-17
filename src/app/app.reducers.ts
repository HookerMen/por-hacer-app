import { Todo } from './todo/models/todo.model';
import * as fromFilterActions from './filter/filter.actions';
import * as fromTodoReducer from './todo/todo.reducer';
import { ActionReducerMap } from '@ngrx/store';
import * as fromFilterReducer from './filter/filter.reducer';

export interface AppState{
    todos: Todo[];
    filter: fromFilterActions.filtrosValidos;
}

export const AppReducers: ActionReducerMap<AppState> = {
    todos: fromTodoReducer.todoReducer,
    filter: fromFilterReducer.filtroReducer
}