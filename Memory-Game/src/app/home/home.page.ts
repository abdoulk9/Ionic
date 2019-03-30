import { Component } from '@angular/core';
import { declaredViewContainer } from '@angular/core/src/view/util';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Cretion d'un objet Cards
  private cardsList: Array<{ name: string, img: string, revealed: boolean }> = [];
  //variable 
  private numberOfDistinctCards = 6;
  //stockage de l'image question-marque
  private questionMarkUrl = '/assets/question-mark.png';
   //Variable boolean pour la vusualisation de la carte
  private hasRevealedCard: boolean = false;
  //variable carte precedente
  private previousCard;
  //declaration du toster pour l'apparution bref de message
  constructor(private toastCtrl: ToastController) {
    this.generateDeck();
  }

  //Affichage des cartes et generation des jeux de cartes
  private generateDeck() {
    for (let i = 0; i < this.numberOfDistinctCards; i++) {
      let imgUrl = '/assets/cards/' + i + '.png';
      this.cardsList.push({ img: this.questionMarkUrl, name: imgUrl, revealed: false })
      this.cardsList.push({ img: this.questionMarkUrl, name: imgUrl, revealed: false })
    }
    this.suffleDeck();
  }

  //pour retourner une carte
  private flipCard(card, index) {
    //affichage de la carte si elle n'est pas déja afficher et si aucune autre carte n'est en cours
    //d'affichage
    if (!card.revealed && !this.hasRevealedCard) {
      //Affichage de la carte
      card.img = card.name;
      card.revealed = true;
      this.hasRevealedCard = true;

      if (this.previousCard && this.previousCard.name == card.name){
        this.previousCard.img = card.name;
        this.previousCard.revealed = true;
        this.hasRevealedCard = false;
        //Cretaion du taoters
        const toast = this.toastCtrl.create({
          message: "Well done you won",
          duration: 2000,
          position: 'middle',
        });
          toast.then(function(toastElement) {
          toastElement.present();
        });
        
      } else{
        //Masquage de la carte au bout d'un certain tps
        setTimeout(
               () => {
            card.img = this.questionMarkUrl;
            card.revealed = false;
            this.hasRevealedCard = false;
            this.previousCard = card;
          },
          1000
        );
        const toast = this.toastCtrl.create({
          message: "Sorry try again!!",
          duration: 2000,
          position: 'middle',
        });
        toast.then(function(toastElement) {
          toastElement.present();
        });
      }
    }
  }
  
  //Melange des cartes
  suffleDeck() {
    this.cardsList.forEach(
      (item, index, deck) => {
        //position aléatoire dans le tableau
        let newPos = Math.floor(Math.random() * deck.length);
        deck[index] = deck[newPos];
        deck[newPos] = item;
      });
  }
}
