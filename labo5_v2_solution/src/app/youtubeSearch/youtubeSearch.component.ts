import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GoogleService } from '../services/google.service';

const youtubeURL = "https://www.youtube.com/embed/";

@Component({
  selector: 'app-youtubeSearch',
  templateUrl: './youtubeSearch.component.html',
  styleUrls: ['./youtubeSearch.component.css']
})
export class YoutubeSearchComponent implements OnInit {

  videoSearchText : string = "";
  videoId : string = "";
  videoUrl ?: SafeResourceUrl;

  constructor(public sanitizer : DomSanitizer, public google : GoogleService) { }

  ngOnInit() {
  }

  async searchVideo():Promise<void>{
    this.videoId = await this.google.searchVideoId(this.videoSearchText);
    this.getSafeUrl();
  }

  getSafeUrl() : void{
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeURL + this.videoId);
  }

}
