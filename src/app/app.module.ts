import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopHeroComponent } from './body/top-hero/top-hero.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { SearchComponent } from './header/searchbar/search.component';
import { BodyCardComponent } from './body/body-card/body-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopHeroComponent,
    SearchComponent,
    BodyCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
