import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { SongComponent } from './song/song.component';
import { StanzaComponent } from './song/stanza/stanza.component';
import { NavComponent } from './nav/nav.component';
import { ToggleComponent } from './nav/toggle/toggle.component';
import { FooterComponent } from './footer/footer.component';
import { IconPanelComponent } from './icon-panel/icon-panel.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    StanzaComponent,
    NavComponent,
    ToggleComponent,
    FooterComponent,
    IconPanelComponent,
    BannerComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
