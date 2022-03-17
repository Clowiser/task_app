//création du composant Task qui va donc nous retourner sur le nav l'affichage des taches notés
import {Todo} from "../model";
import '../App.css';
import SingleTask from "./SingleTask"
import React from "react";

interface Props{
    toDos:Todo[];
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskList = ({toDos, setToDos}: Props) =>{
    return(
        <>
            <div className="container">
                <div className="todos">
                    <h3 className="titleTask">Active Task</h3>
                    {toDos.map((todo) => (
                    <SingleTask key={todo.id}
                                todo={todo}
                                todos={toDos}
                                setToDos={setToDos}
                    />))}
                </div>
                <div className="todosremove">
                    <h3 className="titleTask">Completed Task</h3>

                </div>
            </div>
        </>
    )
}

export default TaskList;

/*<div className="todos">
       {toDos.map((todo) => (
      /*<p className="test" key={t.id}>{t.to do}
           <SingleTask />
       </p>))}

     {toDos.map((todo) => (
       <SingleTask key={todo.id}
                   todo={todo}
                   todos={toDos}
                   setToDos={setToDos}
                   />))}
   </div>*/