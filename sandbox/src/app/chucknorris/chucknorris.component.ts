import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Joke from '../models/Joke';

@Component({
  selector: 'app-chucknorris',
  templateUrl: './chucknorris.component.html',
  styleUrls: ['./chucknorris.component.scss']
})
export class ChucknorrisComponent implements OnInit {
  joke: Joke;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Joke>('https://api.chucknorris.io/jokes/random')
             .subscribe((data: Joke) => {
                this.joke = data;
             });
  }

}
