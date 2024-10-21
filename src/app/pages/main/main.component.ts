import { ICustomer } from './../../models/customer/customer';
import { ISaleAddRequest } from './../../models/sale/requests/sale-add-request.model';
import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { IProduct } from '../../models/product/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SaleService } from '../../services/sale/sale.service';
import { UserService } from '../../services/user/user.service';
import { CustomerService } from '../../services/customer/customer.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  productService=inject(ProductService)
  userService=inject(UserService)
  customerService=inject(CustomerService)
  saleService=inject(SaleService)
  products: IProduct[] = [];
  quantity: any = 0;
  async ngOnInit(){
    await this.loadProducts();
  }
  async loadProducts(){
    await this.productService.getProducts().subscribe((data: IProduct[]) => {
      this.products = data;
    });
  }
  async buyProduct(product: IProduct) {
    const user = await firstValueFrom(this.userService.getUser());
    const customers: ICustomer[] = await firstValueFrom(this.customerService.getCustomers());
    const customer = customers.find(customer => customer.userId === user.id);
    if (!customer) {
      throw new Error('Customer not found for the current user.');
    }
    const sale: ISaleAddRequest = {
      productId: product.id,
      customerId: customer?.id,
      quantity: this.quantity,
      totalPrice: product.price * this.quantity,
    };

    if(sale){
      // Satın alma işlemi gerçekleştiriliyor
      this.saleService.setSale(sale).subscribe(result => {
        console.log("Process done...");
        this.ngOnInit();
  
      });
      
    
    }
    
    
    
  }
}
