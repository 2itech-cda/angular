import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textcounter',
  templateUrl: './textcounter.component.html',
  styleUrls: ['./textcounter.component.scss']
})
export class TextcounterComponent implements OnInit {
  @Input() content: string = '';
  @Input('max') maxLength: number = 10;

  constructor() { }

  ngOnInit(): void { }

}
