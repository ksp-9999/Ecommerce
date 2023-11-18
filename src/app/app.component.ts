import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  cartproducts:any[]=[]
  subTotal=0
  constructor(private productservice: ProductsService){
    this.productservice.cartaddedsubject.subscribe((res:any)=>{
    this.loadcart()
    })
  }
ngOnInit(): void {
  this.loadcart()
}
  loadcart(){
    this.productservice.getCartItemsByCustId(1).subscribe((res:any)=>{
      this.cartproducts=res.data
      res.data.forEach((amt:any) => {
        this.subTotal=this.subTotal+amt.productPrice
      });
    })
  }
}
