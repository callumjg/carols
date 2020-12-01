import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent implements OnInit {
  @Input() isOpen: boolean;
  @Output() isOpenChange = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  onToggle() {
    console.log('Clickded');
    this.isOpenChange.emit(!this.isOpen);
  }
}
