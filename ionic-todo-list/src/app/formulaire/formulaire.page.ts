import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.page.html',
  styleUrls: ['./formulaire.page.scss'],
})
export class FormulairePage implements OnInit {


   private task;
 //ajout de la variable routeur de type Router pour la navigation
  constructor(private todoService:TodoService, private router: Router,
      private storage: Storage) { }

  //la fonction est appéllée à chaque affichage de la page
  ngOnInit() {
    //Initialiation de l'objet
    this.task = {
      taskName: null,
      done: false,
      id: null
    };
  }

  validateForm(){
     if(this.task.taskName){

       //Resolution de la promesse
      this.storage.get('todo-list').then(
        (data)=>{
        let todoList = data || [];
        todoList.push(this.task);
        this.storage.set('todo-list', todoList);
        this.router.navigateByUrl("/home");
        }
      )
    
     }
  }

}
