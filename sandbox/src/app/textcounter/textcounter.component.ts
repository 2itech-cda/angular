import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textcounter',
  templateUrl: './textcounter.component.html',
  styleUrls: ['./textcounter.component.scss']
})
export class TextcounterComponent implements OnInit {
  @Input() content: string = '';
  @Input('max') maxLength: number = 10;

  @Output() toto = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onSend() {
    this.toto.emit(this.content);
    this.content = '';
  }
}
