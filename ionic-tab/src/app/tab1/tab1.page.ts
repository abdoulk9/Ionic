import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //recuperation de la liste
  public userList: Array<any> = []
  pic: any;

  //injection du http
  constructor(private http: HttpClient) {


    //creation d'une variable pour contenir une etablir une connection
    let url = "https://randomuser.me/api?results=20";

    //retour un observable
    let req = this.http.get(url);
    let pic;
    //console.log(req);
    req.subscribe(
      (data: any) => {
        console.log(data);
        this.userList = data.results;
        this.pic = data.results.picture;
      }
    )
  }
}
