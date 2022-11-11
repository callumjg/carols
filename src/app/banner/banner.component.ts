import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  year: string = '';

  ngOnInit(): void {
    const date = new Date();
    this.year = String(date.getFullYear());
  }
}
