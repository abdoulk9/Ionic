import { Injectable } from '@angular/core';


//Decorateur 
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
   private todoList:Array<{taskName: string, done:boolean, id: number}> = [
    {taskName: 'Tuer le lion de Ménée', done: false, id: 1},
    {taskName: 'Nettoyer les écuries d\'Augias', done: false, id: 2},
   ];
   
   
   //La variable qui va contenir l'onget tâche
   private  task = {
    taskName: null, done: false, id: null
   }


  constructor() { }
//ajout
   getData(){
    return this.todoList;
  }

  public getNewTask(){
    //on récupère l'id de chaque tâche
    this.task.id = (new Date()).getTime();
    return this.getNewTask;
  }
  
   //verifie si le tableau et l'id ne sont pas respectivement vide et null
  isValid(): boolean {
     return this.task.taskName && this.task.id
  }
//Ajout la tâche provenant du formulaire au tableau des tâche 
  addTask() {
    this.todoList.push(this.task);
  }
}
