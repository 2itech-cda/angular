import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Product from '../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:3000/products')
        .subscribe((products: Product[]) => this.products = products)
  }

}
