import { Component, Input } from '@angular/core';

export interface Lyric {
  label: string;
  lines: string[];
}
export interface Song {
  arrangement: string[];
  lyrics: Lyric[];
  title: string;
}
@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
})
export class SongComponent {
  lyrics: Lyric[] = [];
  title: string;

  @Input() set song(song: Song) {
    const { arrangement, lyrics, title } = song;
    this.title = title;
    this.lyrics = arrangement
      ? arrangement.map((label) => lyrics.find((l) => l.label === label))
      : lyrics;
  }
}
