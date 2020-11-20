import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // ReactivX 

import Product from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  find(id: string): Observable<Product> {
      return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }
}
