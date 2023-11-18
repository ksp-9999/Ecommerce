import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productslist:any[]=[]
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
}
