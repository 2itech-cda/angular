import { Component } from '@angular/core';
import Tigre from './zoo/Tigre';
import Faucon from './zoo/Faucon';
import { Animal, A, B } from './zoo/Animal';
import Parc from './zoo/Parc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'MonTitre';
  validated: boolean = true;
  comments: Array<string> = [];

  constructor() {
    let t: Tigre = new Tigre();
    t.name = 'Simba';

    let f: Faucon = new Faucon();
    f.name = 'Voltmort';

    const p = new Parc();
    p.add(t);
    p.add(f);

    console.log(p.animals);

    const a = new A('toto');
    const b = new B('hello');
  }

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
