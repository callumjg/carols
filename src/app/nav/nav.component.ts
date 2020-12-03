import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  private _isOpen = false;
  @Input() set isOpen(v) {
    this._isOpen = v;
    const overflow = v ? 'hidden' : '';
    this.document.body.style.overflow = overflow;
  }

  @Input() songs;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  get isOpen() {
    return this._isOpen;
  }
}
