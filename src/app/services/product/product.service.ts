import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProduct } from '../../models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="http://localhost:60805/api"
  httpService=inject(HttpClient)
  constructor() { }
  getProducts(): Observable<IProduct[]> {
    return this.httpService.get<any>(`${this.apiUrl}/Products?PageIndex=0&PageSize=10`).pipe(
      map(response => {
        const products: IProduct[] = response.items.map((item:IProduct) => ({
          id: item.id,
          name: item.name,
          description:item.description,
          stockQuantity: item.stockQuantity,
          price: item.price
        }));
        return products;
      })
    );
  }


}
