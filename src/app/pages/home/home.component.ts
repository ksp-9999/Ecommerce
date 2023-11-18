import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productslist:any[]=[]
  addobj:any={
  "CartId": 0,
  "CustId": 1,
  "ProductId": 0,
  "Quantity": 0,
  "AddedDate": "2023-11-18T08:09:59.696Z"
}
  constructor(private product: ProductsService){
    
  }
  ngOnInit(): void {
    this.loadAllProducts()    
  }
loadAllProducts(){
  this.product.getAllProducts().subscribe((res:any)=>{
    this.productslist=res.data
  })
}

addItemToCart(Id:any){
  debugger
  this.addobj.ProductId=Id
  this.product.addToCart(this.addobj).subscribe((res:any)=>{
    console.log(res);
    if(res.result==true){
      alert("Product added to cart")
      this.product.cartaddedsubject.next(true)
    }
    
  })
}
}
