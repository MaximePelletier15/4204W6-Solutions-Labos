import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  // Cette liste a été transférée dans le DataService
  // characters : string[] = ["bebe","butters","clyde","craig","eric","kenny","kyle","nichole","stan","tolkien","wendy"];
  
  characterName : string = "";

  constructor(public data : DataService) { }

  ngOnInit() {
  }

}
