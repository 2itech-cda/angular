import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-togglebox',
  templateUrl: './togglebox.component.html',
  styleUrls: ['./togglebox.component.scss']
})
export class ToggleboxComponent implements OnInit {
  @Input() title: string = '';
  @Input() state: boolean = true;

  constructor() { }

  ngOnInit(): void { }

}
