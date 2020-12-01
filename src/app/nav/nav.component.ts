import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isOpen = false;

  @Input() songs;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  setOpen(v) {
    this.isOpen = v;
    const overflow = v ? 'hidden' : '';
    this.document.body.style.overflow = overflow;
  }
}
