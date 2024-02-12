import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [		
    AppComponent,
      IndexComponent,
      ListComponent,
      CardComponent,
      DetailsComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"", redirectTo:"/index", pathMatch:"full"},
      {path:"index", component:IndexComponent},
      {path:"list", component:ListComponent},
      {path:"details/:name", component:DetailsComponent},
      {path:"details", component:DetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
