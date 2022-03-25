import React from "react";

//création interface type
interface Person{
    name: {
        firstName: string;
        lastName: string;
    }
    age: number;
    isStudent: boolean;
}

//création interface basique
interface PropsTest{
    text: string;
    num: number;
    isOk?: boolean;
    fnVoid?: () => void;
    fnNumber?: () => number;
    fnParams?: (otherText: string) => string;
    obj: {
        title: string;
        id: number;
        isAlive: boolean;
    }
    objInterfacePerson: Person;
}

//P1 - avec interface
const TutoreacttsPropsTest: React.FC<PropsTest> = () => {
    return <div></div>
}
//l'ensemble des éléments des Props seront à replacé dans le <Tutoreactts /> placé dans le App.tsx = on passe tous ces props
//Si nous n'avons pas besoin de passer tous les élément de l'interface, on rajoute le ? qui rend donc l'élément optionnel
//ex :   isOk?: boolean; fnVoid?: () => void;


interface Props{
    text: string;
    id?: number;
}

//P1 - avec interface
const Tutoreactts: React.FC<Props> = ({id: number, text: string}) => {
    return <div>

    </div>
}


//P2 - sans interface
/*const Tutoreactts: React.FC<{ text: string }> = () => {
    return <div>

    </div>
}*/

// 1 - déclaration du type de la fonction avec les deux points puis le type /= nom-fonction: React.FC
// React = type react et FC = function component
// 2 - je peux lui faire passer un objet grâce à <{}> en spécifiant son type - ex /= <{text: string}>
// ou autre façon de faire cela par la déclaration d'une interface avec la fonction déclarée P1
// 3 - pour accéder à nos Props (propriétés), on les déclare en paramètre de la fonction fléchée



export default Tutoreactts;