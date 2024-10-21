import { ISaleAddRequest } from './../../models/sale/requests/sale-add-request.model';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  httpService=inject(HttpClient)
  private baseUrl = 'http://localhost:60805/api';
  constructor() { }
  setSale(sale:ISaleAddRequest){
    console.log(sale)
    return this.httpService.post<any>(`${this.baseUrl}/Sales`,sale)
  }
}
