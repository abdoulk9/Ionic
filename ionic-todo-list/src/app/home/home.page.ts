import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

//On implemente la OnInit
export class HomePage implements OnInit {


  //Variable pour stocker le ccontenu de provider dans le controleur pour pouvoir l'afficher
  public todoList;

  //Ajout d'une variable router de type Router dans le constructeur 
  constructor(
    private todoService: TodoService,
    private storage: Storage,
    private router: Router) {

  }
  //Methode invoquée à la création de chaque page
  ngOnInit(): void {
  }

  //cette methode est appelée chaque affichage de la page
  ionViewWillEnter(): void {
    this.storage.get('todo-list').then((data) => {
      // si dtodoList est egal à data ou tableau vide
      this.todoList = data || [];
    });
  }

  deleteTask(pos) {
    //sppresion de la tâche
    this.todoList.splice(pos, 1);
    //suvegarde
    this.storage.set('todo-list', this.todoList);
  }

  //Modification du formulaire
  showUpdateForm(pos) {
    //Utilisation de l'objet router crée plus haut
    this.router.navigateByUrl('/formulaire/' + pos);
  }
}
