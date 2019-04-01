import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

  //On implemente la OnInit
export class HomePage implements OnInit {


  //Variable pour stocker le ccontenu de provider dans le controleur pour pouvoir l'afficher
  private todoList;


  constructor(private todoService: TodoService,
    private storage: Storage) {

  }

  ngOnInit(): void {
    this.storage.get('todo-list').then((data) => {
      // si dtodoList est egal à data ou tableau vide
    this.todoList = data || [];
    });
  }

  deleteTask(pos){
    //sppresion de la tâche
    this.todoList.splice(pos, 1);
    //suvegarde
 this.storage.set('todo-list', this.todoList);
  }
}
