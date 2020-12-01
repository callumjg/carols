import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SongComponent } from './song/song.component';
import { StanzaComponent } from './song/stanza/stanza.component';
import { NavComponent } from './nav/nav.component';
import { ToggleComponent } from './nav/toggle/toggle.component';
import { MenuComponent } from './nav/menu/menu.component';

@NgModule({
  declarations: [AppComponent, SongComponent, StanzaComponent, NavComponent, ToggleComponent, MenuComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
