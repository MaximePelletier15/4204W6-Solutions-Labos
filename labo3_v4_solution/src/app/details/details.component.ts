import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../models/character';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  characterName : string | null = null;
  characterDetails : Character | null = null;

  constructor(public route : ActivatedRoute, public http : HttpClient, public data : DataService) { }

  async ngOnInit() : Promise<void> {
    this.characterName = this.route.snapshot.paramMap.get("name");
    if(this.characterName == null){
      this.characterName = "kenny";
    }
    // La requête a été déplacée dans un service et on appelle la fonction du service ici.
    // Le await est essentiel car la fonction avec la requête dans le service retourne Promise<Character>
    // (et non un simple Character !)
    this.characterDetails = await this.data.searchCharacter(this.characterName);
  }
}
