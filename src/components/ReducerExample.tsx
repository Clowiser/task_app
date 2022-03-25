import React, {useReducer} from 'react';
//import {Todo} from "../model";

type Action =
    | {type: "add"; text: string; }
    | {
    type: "remove";
    idx: number;
};

interface Todo {
    text: string;
    complete: boolean;
}

type State = Todo[];

const TodoReducer = (state: State, action: Action) => {

}

export const ReducerExample = () => {
    //const [todos, dispatch] = useReducer(TodoReducer, []);
    // const [valeur courante, modif] = useReducer(nom de la fonction, initialisation)




}