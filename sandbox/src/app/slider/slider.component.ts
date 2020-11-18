import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() min: number = 0;
  @Input() max: number = 255;
  @Input() value: number = 0;
  @Output() slide: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  onChange(value: number): void {
    this.slide.emit(value);
  }
}
