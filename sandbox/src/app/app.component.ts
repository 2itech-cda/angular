import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'MonTitre';
  validated: boolean = true;
  comments: Array<string> = [];

  onClick(): void {
    alert('Aiieee');
  }

  getText(text: string): void {
    this.comments.push(text);
  }

  onInput(evt: Event): void {    
    // console.log(evt.target);
    //evt.target comme étant un HTMLInputElement
    const elem = evt.target as HTMLInputElement;
    this.title = elem.value;
    //console.log(elem.value);
  }

}
