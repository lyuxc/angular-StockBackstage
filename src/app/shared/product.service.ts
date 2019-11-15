import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllCategories(): string[] {
    return ["电子产品", "硬件设备", "图书"];
  }

  getProducts(): Observable<Product[]> {
    return null
    // return  this.http.get("/api/products").map(res => res.json())
  }

  getProduct(id:number): Observable<Product> {
    return null
    // return this.http.get("/api/products/"+id).map(res => res.json())
  }

  getCommentsForProduct(id:number): Observable<Comment[]> {
    return null
    // return this.http.get("/api/products/"+id+"/comments").map(res => res.json())
  }
}

export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>) {}
}

export class Comment {
  constructor(
    public id:number,
    public productId:number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string) {}
}
