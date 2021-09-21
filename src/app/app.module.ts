import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { TileLayoutComponent } from './body/multi-tile/tile-layout.component';
import { TileComponent } from './body/multi-tile/tiles/tile.component';
import { HwTileComponent } from './body/multi-tile/tiles/hw-tile-component';
import { ExamTileComponent } from './body/multi-tile/tiles/exam-tile-component';
import { TopicTileComponent } from './body/multi-tile/tiles/topic-tile-component';
import { WritingTileComponent } from './body/multi-tile/tiles/writing-tile-component';
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
    HwTileComponent,
    ExamTileComponent,
    TopicTileComponent,
    WritingTileComponent,
    StudyMenuComponent,
    HomeComponent,
    BooksComponent,
    StudyComponent,
    CareerComponent,
    LifeComponent,
    BooksHeroComponent,
    LifeHeroComponent,
    StudyHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
