import { Injectable } from '@angular/core';


//Decorateur 
@Injectable({
  providedIn: 'root'
})
export class TodoService {
 
   private todoList:Array<{taskName: string, done:boolean}> = [
    {taskName: 'Tuer le lion de Ménée', done: false},
    {taskName: 'Nettoyer les écuries d\'Augias', done: false},

   ];

  constructor() { }
//ajout
   getData(){
    this.todoList;
  }
}
