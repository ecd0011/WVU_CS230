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
    WritingTileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
