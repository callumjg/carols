import { DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() isOpen;
  @Output() isOpenChange = new EventEmitter<boolean>();
  @Input() songs;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  onSongSelect(title) {
    const el = this.document.getElementById(title);
    el.scrollIntoView();
    this.isOpenChange.emit(false);
  }
}
