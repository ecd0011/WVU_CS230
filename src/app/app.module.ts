import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopHeroComponent } from './body/top-hero/top-hero.component';
import { SearchComponent } from './header/searchbar/search.component';
import { BodyCardComponent } from './body/body-card/body-card.component';
import { HeaderLayoutComponent } from './header/header-layout.component';
import { NavLayoutComponent } from './header/navbar/nav-layout.component';
import { NavMiddleComponent } from './header/navbar/nav-middle-component';
import { NavRightComponent } from './header/navbar/nav-right.component';
import { BodyLayoutComponent } from './body/body-layout.component';
import { BTNComponent } from './body/btn.component';
import { TileLayoutComponent } from './body/multi-tile/tiles/tile-layout.component';
import { TileComponent } from './body/multi-tile/tiles/tile.component';
import { StudyMenuComponent } from './header/navbar/study-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { StudyComponent } from './pages/study/study.component';
import { CareerComponent } from './pages/career/career.component';
import { LifeComponent } from './pages/life/life.component';
import { AppRoutingModule } from './app-routing.module';
import { BooksHeroComponent } from './pages/books/books-hero.component';
import { LifeHeroComponent } from './pages/life/life-hero.component';
import { StudyHeroComponent } from './pages/study/study-hero.component';
import { UserInfoComponent } from './body/user-info.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';


@NgModule({
  declarations: [
    AppComponent,
    TopHeroComponent,
    SearchComponent,
    BodyCardComponent,
    HeaderLayoutComponent,
    NavLayoutComponent,
    NavMiddleComponent,
    NavRightComponent,
    BodyLayoutComponent,
    BTNComponent,
    TileLayoutComponent,
    TileComponent,
    StudyMenuComponent,
    HomeComponent,
    BooksComponent,
    StudyComponent,
    CareerComponent,
    LifeComponent,
    BooksHeroComponent,
    LifeHeroComponent,
    StudyHeroComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'chegg-app')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
