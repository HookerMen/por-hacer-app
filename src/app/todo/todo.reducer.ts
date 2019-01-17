import * as fromTodoActions from './todo.actions';
import { Todo } from './models/todo.model';


const todo1 = new Todo("Vencer a Thanos");
const todo2 = new Todo("Salvar al Mundo");
const todo3 = new Todo("pedir prestado traje de ironman");
todo3.completado = true;
const estadoInicial : Todo[] = [
    todo1,
    todo2,
    todo3
];

export function todoReducer( state = estadoInicial, action: fromTodoActions.Acciones): Todo[] {
    switch(action.type) {
        case fromTodoActions.AGREGAR_TODO:
            const todo = new Todo( action.texto );
            return [ ...state, todo];
        case fromTodoActions.EDITAR_TODO:
            return state.map( todoEdit => {
                if( todoEdit.id === action.id ){
                    return {
                        ...todoEdit,
                        texto: action.texto
                    }
                } else {
                    return todoEdit;
                }
            });
        case fromTodoActions.BORRAR_TODO:
            return state.filter( todoRemove => todoRemove.id !== action.id);
        case fromTodoActions.TOGGLE_TODO:
            return state.map( todoEdit => {
                if( todoEdit.id === action.id ) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };
                } else {
                    return todoEdit;
                }
            });
        case fromTodoActions.TOGGLE_ALL_TODO:
            return state.map( todoEdit => {
                return {
                    ...todoEdit,
                    completado: action.completado
                };
            });
        case fromTodoActions.BORRAR_TODOS_COMPLETADAS:
            return state.filter( todoEdit => !todoEdit.completado);
        default:
            return state;
    }
}