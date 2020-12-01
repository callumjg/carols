import { Component } from '@angular/core';
import songs from './songs.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'carols';
  songs = songs;
}
