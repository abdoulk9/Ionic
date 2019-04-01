import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.page.html',
  styleUrls: ['./formulaire.page.scss'],
})
export class FormulairePage implements OnInit {


   private task;
 //ajout de la variable routeur de type Router pour la navigation
  constructor(private todoService:TodoService, private router: Router) { }

  //la fonction est appéllée à chaque affichage de la page
  ngOnInit() {
    this.task = this.todoService.getNewTask();
  }

  validateForm(){
     if(this.todoService.isValid()){
     this.todoService.addTask();
     this.router.navigateByUrl("/home");
     }
  }

}
