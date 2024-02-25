import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PlumbingComponent } from './plumbing/plumbing.component';
import { BalloonMapComponent } from './balloonMap/balloonMap.component';
import { YoutubeSearchComponent } from './youtubeSearch/youtubeSearch.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SpecialPipe } from './pipes/special.pipe';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    YoutubeSearchComponent,
    PlumbingComponent,
    BalloonMapComponent,
    SpecialPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"", redirectTo:"/youtube", pathMatch:"full"},
      {path:"youtube", component:YoutubeSearchComponent},
      {path:"balloonMap", component:BalloonMapComponent},
      {path:"plumbing", component:PlumbingComponent}
    ]),
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
