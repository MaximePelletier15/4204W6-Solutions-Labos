import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StockageComponent } from './stockage/stockage.component';
import { I18nComponent } from './i18n/i18n.component';
import { TokenComponent } from './token/token.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
      StockageComponent,
      I18nComponent,
      TokenComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"", redirectTo: "/stockage", pathMatch:"full"},
      {path:"stockage", component:StockageComponent},
      {path:"i18n", component:I18nComponent},
      {path:"token", component:TokenComponent}
    ]),
    TranslateModule.forRoot({
      loader : {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}
