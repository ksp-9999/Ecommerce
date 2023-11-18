import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit{
  cartproducts:any[]=[]
  TotalAmount:number=0
constructor(private http:HttpClient,private productsservice:ProductsService){

}
ngOnInit(): void {
  this.loadcart()
}
loadcart(){
    this.productsservice.getCartItemsByCustId(1).subscribe((res:any)=>{
      this.cartproducts=res.data
      res.data.forEach((ele:any)=>{
        this.TotalAmount=this.TotalAmount+ele.productPrice
      })
    })
    this.TotalAmount=0
  }
removeItemFromCart(id:any){
  this.productsservice.removeProductFromCart(id).subscribe((res:any)=>{
    if(res.result){
      this.loadcart()
    }
    this.productsservice.cartaddedsubject.next(true)
  })
}
}
