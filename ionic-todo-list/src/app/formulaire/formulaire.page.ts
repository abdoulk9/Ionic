import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.page.html',
  styleUrls: ['./formulaire.page.scss'],
})
export class FormulairePage implements OnInit {


  private task;
  private pos;
  //ajout de la variable routeur de type Router pour la navigation
  //injection de la Variable activateRoute pour recuperer la position de l'element modifer
  constructor(
    private todoService: TodoService,
    private router: Router,
    private storage: Storage,
    private activateRoute: ActivatedRoute) { }

  //la fonction est appéllée à chaque affichage de la page
  ngOnInit() {

    //Initialiation de l'objet
    this.task = {
      taskName: null,
      done: false,
      id: null
    }
    //Récupèration de la position (modification)
    this.pos = this.activateRoute.snapshot.paramMap.get('pos');
    //si pos n'est pas vide (modification)
    if (this.pos) {
      this.storage.get('todo-list').then(
        (data) => {
          this.task = data[this.pos];
          console.log(data);
        }
      )
    }
  }

  validateForm() {
    console.log(this.task);
    if (this.task && this.task.taskName) {

      //Resolution de la promesse
      this.storage.get('todo-list').then(
        (data) => {
          let todoList = data || [];
          //si la position est definie[ Ajout ou modification seleon le cas]
          if(this.pos){
           todoList[this.pos]= this.task;
          }else{

          todoList.push(this.task);
          }
          this.storage.set('todo-list', todoList);
          this.router.navigateByUrl("/home");
        }
      )

    }
  }

}
