import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import {Todo} from "./model";
import TaskList from "./components/TaskList";
import {DragDropContext, DropResult} from 'react-beautiful-dnd';
import Tutoreactts from "./components/Tutoreactts";

//function App() {} transformer en fonction fléchée
const App: React.FC = () => {
    //functionnal component utilisant le type React.FC

    const [toDo, setToDo] = useState<string>("");
    //useState stirng vide car utilisateur va noter son to Do + avec TS on note entre crochet le type voulu (ici string)
    //si ni <string> ni "", le type to DO est undifened et si juste <string>, type string | undifined, mettre "" = type string
    //const [to Do, setToDO] = useState<string | number>("") -> On peut avoir plusieurs types = séparation par un pipe
    //console.log(toDo);

    const [toDos, setToDos] = useState<Todo[]>([]);
    //ensuite, nous allons créer un useState de notre tableau de to Do (du model avec id, message et boolean)

    //Drag&Drop - utilisation de la librairie react-beautiful-dnd
    //création du useState pour la partie Completed task (dans laquelle on va glisser les éléments)
    const [completedTask, setCompletedTask] = useState<Todo[]>([]);


    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        //preventDefault() : si l'évènement n'est pas explicitement géré, l'action par défaut ne devrait pas être exécutée comme elle l'est normalement = elle va être bloquée
        //?
        if (toDo) { //s'il y a un to Do(message)
            setToDos([...toDos, {id: Date.now(), todo: toDo, isDone: false}]) //ajout dans setToDoS, après liste des toDoS, infos ID, to do et isDone: false car true avec sa création
            setToDo(""); //tu rend le setToDo vide
        };
        //date.now(): est utilisé ici pour générer des randoms id, mais ça sert pas a ça de base (elle renvoie le nombre de millisecondes écoulées depuis le 1er Janvier 1970)
    }

    //la logique de Drag&Drog
    const onDragEnd = (result: DropResult) => {
        console.log(result);
        const {source, destination} = result;

        //les conditions
        if(!destination) return;
        //si la destination est nulle (n'existe pas), ne fais rien

        if(destination.droppableId === source.droppableId && destination.index === source.index) return;
        //si la destination est la même que la source pour id et index, ne fais rien

        //déclaration de 3 variables,
        let add,
            active = toDos,
            completed = completedTask;

        if (source.droppableId === "TaskList") {
            add = active[source.index];
            active.splice(source.index, 1);
        }else {
            add = completed[source.index];
            completed.splice(source.index, 1);
        }

        if (destination.droppableId === "TaskList") {
            active.splice(destination.index, 0, add);
        }else {
            completed.splice(destination.index, 0, add);
        }

        setCompletedTask(completed);
        setToDos(active);
    }

    //console.log(toDos);

        return (
            <DragDropContext onDragEnd={onDragEnd} >
            <div className="App">
                <h1 className="heading">Task App</h1>
                <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd}/>
                <TaskList toDos={toDos} setToDos={setToDos} completedTask={completedTask} setCompletedTask={setCompletedTask}/>
                <Tutoreactts text={"Tutos React-TS"} />
            </div>
            </DragDropContext>

        );
}
//importation du useState dans le composant pour utiliser les données -> on transmet les valeurs avec les {}

//  <DragDropContext onDragEnd={() => {}} > : envelopper la partie ou l'on va mettre en place le Drag&Drop

export default App;
