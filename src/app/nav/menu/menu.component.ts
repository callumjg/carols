import { DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input() isOpen;
  @Output() isOpenChange = new EventEmitter<boolean>();
  @Input() songs;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  onSongSelect(title) {
    const el = this.document.getElementById(title);
    this.isOpenChange.emit(false);
    el.scrollIntoView();
  }
}
