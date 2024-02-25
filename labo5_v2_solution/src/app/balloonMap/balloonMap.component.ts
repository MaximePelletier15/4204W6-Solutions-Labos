import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balloonMap',
  templateUrl: './balloonMap.component.html',
  styleUrls: ['./balloonMap.component.css']
})
export class BalloonMapComponent implements OnInit {

  inputLat : number = 0;
  inputLng : number = 0;

  center : google.maps.LatLngLiteral = {lat: 42, lng: -4};
  zoom : number = 2;

  markerPositions : google.maps.LatLngLiteral[] = [
    {lat: 42, lng: -4}
  ];

  constructor() { }

  ngOnInit() {
  }

  addBalloon() : void {
    this.markerPositions.push({lat: this.inputLat, lng : this.inputLng});
  }

  clearBalloons() : void {
    this.markerPositions = [];
  }

}
