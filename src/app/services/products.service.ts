import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public cartaddedsubject= new Subject<boolean>()

  constructor(private http:HttpClient) {

  }

  getAllProducts():Observable<any[]>{
    return this.http.get<any[]>('https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts')
  }

  addToCart(obj:any):Observable<any>{
    console.log(obj);
    
    return this.http.post('https://freeapi.miniprojectideas.com/api/amazon/AddToCart',obj)
  }

  getCartItemsByCustId(CustId:number){
    return this.http.get('https://freeapi.miniprojectideas.com/api/amazon/GetCartProductsByCustomerId?id='+CustId)
  }
  removeProductFromCart(id:number){
    return this.http.get('https://freeapi.miniprojectideas.com/api/amazon/DeleteProductFromCartById?id='+id)
  }
}
