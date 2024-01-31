import { Component } from '@angular/core';
import { Nintendog } from './models/Nintendog';
import { ImaginaryFriend } from './models/ImaginaryFriend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
  //     Variables de classe
  // ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
  myWisdom : string = "Les ptits jus c'est pour les lunchs.";

  n : number;

  hateList : string[] = [
    "Enseigner à des étudiants en informatique",
    "Aller à un cours à 8h du matin",
    "Publicités de Hero Wars sur Youtube"
  ];

  dog : Nintendog = new Nintendog("Félix-Antoine", "/assets/img/shibaInu.png");

  friends : ImaginaryFriend[] = [
    new ImaginaryFriend("Benny", "taxidermiste"),
    new ImaginaryFriend("Simone", "artiste ASMR"),
    new ImaginaryFriend("Salma", "apicultrice")
  ];

  name ?: string;
  occupation ?: string;

  darkMode : boolean = false;

  // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
  //        Constructeur
  // ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
  constructor(){
    this.n = 14;
  }

  // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
  //          Méthodes
  // ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
  addFriend(){
    if(this.name != undefined && this.occupation != undefined){
      this.friends.push(new ImaginaryFriend(this.name, this.occupation));
      this.name = "";
      this.occupation = ""; 
    }
  }

  removeFriend(){
    this.friends.pop();
  }

  toggleMode(){
    this.darkMode = !this.darkMode;
  }

}