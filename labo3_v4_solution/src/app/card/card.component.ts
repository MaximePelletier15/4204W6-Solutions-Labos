import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // @Input qui reçoit le nom d'un personnage donné par le composant list
  @Input() characterName : string = "";

  constructor() { }

  ngOnInit() {
  }

}
