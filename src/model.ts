//création d'un fichier ts (ts pure, sans jsx) qui va nous servir à enregister les taches écrites dans l'input
//chaque tache à son id unique (comme les projets/photos/portfolio de enlaps)
// qu'est-ce qu'à chaque tache et a quoi doit repondre chaque tache ? S/ un id, un message et savoir si elle est faite ou pas
// on commence avec la déclaration de l'interface et des types voulus que l'on export pour qu'il

export interface Todo{
    id: number;
    todo: string;
    isDone: boolean;
}

