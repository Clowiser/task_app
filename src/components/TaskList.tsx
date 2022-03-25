//création du composant Task qui va donc nous retourner sur le nav l'affichage des taches notés
import {Todo} from "../model";
import '../App.css';
import SingleTask from "./SingleTask"
import React from "react";
import {Droppable} from "react-beautiful-dnd";

interface Props{
    toDos:Todo[];
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTask: Todo[];
    setCompletedTask: React.Dispatch<React.SetStateAction<Todo[]>>;
}
//déclaration type interface => type ok

//on passe les props en paramètres avec leur type pour pouvoir les utiliser dans fonction fléchée avec le return
const TaskList = ({toDos, setToDos, completedTask, setCompletedTask}: Props) =>{
    //console.log(toDos);
    console.log(completedTask);
    return(
            <div className="container">
                <Droppable droppableId='TaskList'>
                    {(provided,snapshot) =>  (
                        <div className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
                             ref={provided.innerRef}
                             {...provided.droppableProps}>
                        <h3 className="titleTask">Active Task</h3>
                        {toDos.map((todo, index) => (
                            <SingleTask
                                index={index}
                                key={todo.id}
                                todo={todo}
                                todos={toDos}
                                setToDos={setToDos}
                            />))}
                            {provided.placeholder}
                    </div>)}
                </Droppable>

                <Droppable droppableId='TaskRemove'>
                    {(provided, snapshot) =>  (
                        <div className={`todosremove  ${
                            snapshot.isDraggingOver ? "dragcomplete" : "remove"}`}
                             ref={provided.innerRef}
                             {...provided.droppableProps}>
                            <h3 className="titleTask">Completed Task</h3>
                            {completedTask.map((todo, index) => (
                                <SingleTask
                                    index={index}
                                    key={todo.id}
                                    todo={todo}
                                    todos={completedTask}
                                    setToDos={setCompletedTask}
                                />))}
                            {provided.placeholder}
                        </div>
                        )}
                </Droppable>
            </div>
    )
}

// <Droppable droppableId='TaskList'> : une zone ou les éléments à l'intérieur vont être droppable + contient <Draggable>
// <Draggable > : ce qui va être droppable

export default TaskList;