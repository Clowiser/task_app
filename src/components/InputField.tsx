import React, {useRef} from "react";

interface Props{
    toDo:string;
    //to Do est un string mais setToDo est une fonction! on va donc prendre le type spécifique (useState) React.Dispatch<React.SetStateAction<ici le type>>
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    //dispatch est une fonction Redux. Vous appelez store.dispatch pour envoyer une action.
    //C'est le seul moyen de déclencher un changement d'état.
    handleAdd:(e: React.FormEvent) => void;
    //fonction
}

//on récupère donc les valeurs to Do et setToDo ici MAIS il y a qun problème de type S/ créer l'interface pour décrire les types
const InputField = ({toDo, setToDo, handleAdd}: Props) => {
// ou const InputField: React.FC<Props> = ({to Do, setToDo}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    //useRef : récupérer une valeur et <HTMLInputElement> pour type HTML input

    return <form className='input' onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
        //par le fait de récupérer la valeur courante/actuelle optionnelle (avec la possibilité qu'elle soit nulle)
        //+ blur() qui supprime le focus clavier de l'élément actuel.
    }}>
        <input placeholder="Enter your task"
               className="input_box"
               value={toDo} onChange={(e)=>setToDo(e.target.value)}
               ref={inputRef}/>
        <button type="submit" className="button">GO</button>
    </form>
}

/* e.target.value
* e : c'est l'argument d'un gestionnaire d'événement que l'on attache à un certain événement sur un certain composant
* e.target : représente presque toujours un élément DOM
* e.target.value : c'est la propriété value d'un élément DOM
* Fondamentalement, il récupère la valeur de l'entrée sur laquelle il a été appelé.
Dans ce cas, c'est notre élément d'entrée (donc tout ce que vous insérez dans votre entrée to Do) qui est accessible via event.target.value
*/
export default InputField;