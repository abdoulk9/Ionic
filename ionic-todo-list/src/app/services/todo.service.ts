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

  constructor() { }
//ajout
   getData(){
    return this.todoList;
  }
}
