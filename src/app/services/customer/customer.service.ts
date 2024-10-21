import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICustomer } from '../../models/customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl="http://localhost:60805/api"
  http=inject(HttpClient)
  constructor() { }

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<any>(`${this.apiUrl}/Customers?PageIndex=0&PageSize=10`).pipe(
      map(response => {
        const customers: ICustomer[] = response.items.map((item: ICustomer) => ({
          id:item.id,
          firstName: item.firstName,
          lastName: item.lastName,
          email: item.email,
          phoneNumber: item.phoneNumber,
          userId:item.userId
        }));
        return customers;
      })
    );
  }
}
