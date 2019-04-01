import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  //Variable pour stocker le ccontenu de provider dans le controleur pour pouvoir l'afficher
  private todoList;


  constructor(private todoService: TodoService){
    this.todoList = todoService.getData();
  }
}
