import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SongComponent } from './song/song.component';
import { StanzaComponent } from './song/stanza/stanza.component';

@NgModule({
  declarations: [AppComponent, SongComponent, StanzaComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
