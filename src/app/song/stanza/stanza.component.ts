import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stanza',
  templateUrl: './stanza.component.html',
  styleUrls: ['./stanza.component.css'],
})
export class StanzaComponent implements OnInit {
  @Input() stanza;

  constructor() {}

  ngOnInit(): void {}
}
