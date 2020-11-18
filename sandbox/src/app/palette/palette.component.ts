import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {
  colors: any = {red: 0, green: 0, blue: 0};

  constructor() { }

  ngOnInit(): void { }

  getColor(): string {
    return `rgb(${this.colors.red}, ${this.colors.green}, ${this.colors.blue})`;
  }
}
