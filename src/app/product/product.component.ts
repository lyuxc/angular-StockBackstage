import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];

  private imgUrl = 'http://placehold.it/320x150'

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {

  this.products = this.productService.getProducts();


    
    // this.products.push(
    //   new Product(7,"第七个商品",1.96,4.6,"这是一个商品，是我在学习慕课网Angular入门实战时创建的。",["图书"])
    // )
  }
}

