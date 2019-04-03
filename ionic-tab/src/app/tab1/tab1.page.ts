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
  constructor(private http: HttpClient) {


    //creation d'une variable pour contenir une etablir une connection
    let url = "https://randomuser.me/api";
     
     //declarattion de filtrage 
    let requestParams = new HttpParams().set('results','20')
                                        .set('gender', 'female')
                                        .set('nat','fr, ch');

    //retour un observable
    let req = this.http.get(url, {params: requestParams});
    
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
