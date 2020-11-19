import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Joke from '../models/Joke';

@Component({
  selector: 'app-chucknorris',
  templateUrl: './chucknorris.component.html',
  styleUrls: ['./chucknorris.component.scss']
})
export class ChucknorrisComponent implements OnInit {

  constructor(private http: HttpClient) { }

  data = '{"url": "api.chucknorris.io"}';

  ngOnInit(): void {
    this.http.get('https://api.chucknorris.io/jokes/random')
             .subscribe((data: any) => {
               console.log('Est un model Joke ? : ', data instanceof Joke);

               const joke = new Joke();
               joke.url = data.url; // une correspondance entre joke et data.

               console.log('Est un model Joke ? : ', joke instanceof Joke);
               console.log(joke.url);
             });
  }

}
