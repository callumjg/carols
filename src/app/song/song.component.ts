import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
})
export class SongComponent {
  @Input() song;

  get arrangement() {
    const { arrangement, lyrics } = this.song;
    return arrangement
      ? arrangement.map((label) => lyrics.find((l) => l.label === label))
      : lyrics;
  }
}
