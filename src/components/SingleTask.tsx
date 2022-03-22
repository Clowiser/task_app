//composant pour une tache
import poubelle from "../assets/img/poubelle.png"
import coche from "../assets/img/coche.png"
import edition from "../assets/img/edition.png"
import '../App.css';
import {Todo} from "../model";
import React, {useEffect, useRef, useState} from "react";
import TaskList from "./TaskList";
import {Draggable} from "react-beautiful-dnd";

interface Props {
    index: number,
    todo: Todo;
    todos: Todo[];
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTask = ({index, todo, todos, setToDos}: Props) => {
    //console.log({todo});
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    /*const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);*/



    //CRUD React
    //Done
    const handleDone = (id: number) => {
        setToDos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone } : todo))
        //la j'ai plus de cerveau - A REVOIR
    }

    //Delete
    const handleDelete = (id: number) =>  {
     setToDos(todos.filter((todo) => todo.id !== id));
        //c'est par la méthode filter que ça supp (ça parcout le tableau)
    }

    const handleEdit = (e:React.FormEvent, id:number) => {
        e.preventDefault();

        setToDos(todos.map((todo)=> (
            todo.id === id?{...todo, todo:editTodo} : todo)));
        setEdit(false);
    };

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {
                (provided, snapshot) => (
                    <form
                        className={`todo__single ${snapshot.isDragging ? "drag" : ""}`}
                        onSubmit={(e) => handleEdit(e, todo.id)}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}>
                        {
                            edit ? (
                                <input type="text" value={editTodo}
                                       onChange={(e) => setEditTodo(e.target.value)}
                                       ref={provided.innerRef}/>
                            ) : (
                                todo.isDone ? (
                                    <s>{todo.todo}</s>
                                ) : (
                                    <p>{todo.todo}</p>
                                )
                            )
                        }

                        <div className="iconsChoice">
                            <img src={coche} alt="coche" className="iconsImg"
                                 onClick={() => handleDone(todo.id)}/>
                            <img src={edition} alt="edit" className="iconsImg"
                                 onClick={()=> {
                                if (!edit && !todo.isDone) {
                                    setEdit(!edit)
                                }
                            }
                            } />
                            <img src={poubelle} alt="poubelle" className="iconsImg"
                                 onClick={() => handleDelete(todo.id)}/>
                        </div>
                    </form>
                )
            }

        </Draggable>

    )

}

export default SingleTask;