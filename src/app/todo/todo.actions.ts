import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[Todo] Agregar Todo';
export const EDITAR_TODO = '[Todo] Editar Todo';
export const BORRAR_TODO = '[Todo] Borrar Todo';
export const BORRAR_TODOS_COMPLETADAS = '[Todo] Borrar Todos Completadas'


export const TOGGLE_TODO = '[Todo] Toggle Todo';
export const TOGGLE_ALL_TODO = '[Todo] Toggle All Todo';


export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor(public texto: string) {}
}
export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor( public id: number ) {}
}
export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;
    constructor( public completado: boolean ) {}
}
export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;
    constructor( public id: number, public texto: string ) {}
}
export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;
    constructor( public id: number ) {}
}
export class BorrarAllCompletadasAction implements Action {
    readonly type = BORRAR_TODOS_COMPLETADAS;
    constructor(){}
}


export type Acciones = AgregarTodoAction 
                    | ToggleTodoAction 
                    | EditarTodoAction 
                    | BorrarTodoAction
                    | ToggleAllTodoAction
                    | BorrarAllCompletadasAction;