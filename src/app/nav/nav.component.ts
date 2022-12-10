import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import scrollIntoView from 'scroll-into-view-if-needed';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  @Input() songs;

  private _isOpen = false;

  @Input() set isOpen(v) {
    const overflow = v ? 'hidden' : '';
    this.document.body.style.overflow = overflow;
    this._isOpen = v;
  }
  get isOpen() {
    return this._isOpen;
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  onSongSelect(title) {
    this.isOpen = false;
    const el = this.document.getElementById(title);
    setTimeout(() => {
      scrollIntoView(el, {
        behavior: 'smooth',
        block: 'start',
      });
    }, 0);
  }
}
