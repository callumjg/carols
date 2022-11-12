import { Component, Input } from '@angular/core';
import { Lyric } from '../song.component';

@Component({
  selector: 'app-stanza',
  templateUrl: './stanza.component.html',
  styleUrls: ['./stanza.component.css'],
})
export class StanzaComponent {
  @Input() stanza: Lyric;
}
