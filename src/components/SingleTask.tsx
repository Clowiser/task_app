//composant pour une tache
import poubelle from "../assets/img/poubelle.png"
import coche from "../assets/img/coche.png"
import edition from "../assets/img/edition.png"
import '../App.css';
import {Todo} from "../model";
import React, {useState} from "react";
import TaskList from "./TaskList";

interface Props {
    todo: Todo;
    todos: Todo[];
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTask = ({todo, todos, setToDos}: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    //CRUD React
    //Done
    const handleDone = (id: number) => {
        setToDos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone } : todo))
        //la j'ai plus de cerveau - A REVOIR
    }

    //Delete
    const handleDelete = (id: number) =>  {
     setToDos(todos.filter((todo) => todo.id !== id));
     //pas compris comment ça supprime
        //c'est par la méthode filter que ça supp (ça parcout le tableau)
    }

    const handleEdit = (e:React.FormEvent, id:number) => {
        e.preventDefault();

        setToDos(todos.map((todo)=> (
            todo.id === id?{...todo, todo:editTodo} : todo)));
        setEdit(false);
    };

    return (
        <>
        <form className="test" onSubmit={(e) => handleEdit(e, todo.id)}>
            {
                edit ? (
                    <input type="text" value={editTodo} onChange={(e) => setEditTodo(e.target.value)}/>
                ) : (
                    todo.isDone ? (
                        <s>{todo.todo}</s>
                    ) : (
                        <p>{todo.todo}</p>
                    )
                )
            }

            <div className="iconsChoice">
                <img src={coche} alt="coche" className="iconsImg" onClick={() => handleDone(todo.id)}/>
                <img src={edition} alt="edit" className="iconsImg" onClick={()=> {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }
                } />
                <img src={poubelle} alt="poubelle" className="iconsImg" onClick={() => handleDelete(todo.id)}/>
            </div>
        </form>
        </>

    )

}

export default SingleTask;