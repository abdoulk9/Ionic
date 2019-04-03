import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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
  constructor(private http: HttpClient){
    // creation d'une variable pour contenir une etablir une connection
    // On donne comme second argument null parcqu'on peut lui passer even
    this.loadData(false, null); 
  }

  private loadData(addBeforeContent: boolean, even) {
    let url = "https://randomuser.me/api";
    //Filtrage  de resultats par passage de parametre 
    let requestParams = new HttpParams().set('results', '20')
      .set('gender', 'female')
      .set('nat', 'fr, ch');
    //retour un observable
    let req = this.http.get(url, { params: requestParams });
    //console.log(req);
    req.subscribe((data: any) => {
      console.log(data);
      if(addBeforeContent){
        this.userList = data.results.concat(this.userList);
      }else{
        this.userList = this.userList.concat(data.results);
      }
      if(even){
        even.target.complete();
      }
    });
  }
    public loadMoreData(even){
    this.loadData(false, even)
  }

}
