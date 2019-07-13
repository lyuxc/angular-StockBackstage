import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   private products: Product[] = [
    new Product(1,"第一个商品",1.91,3.1,"这是一个商品，是我在学习慕课网Angular入门实战时创建的。",["电子产品","硬件设备"]),
    new Product(2,"第二个商品",1.92,2.2,"这是一个商品，是我在学习慕课网Angular入门实战时创建的。",["图书","硬件设备"]),
    new Product(3,"第三个商品",1.93,4.3,"这是一个商品，是我在学习慕课网Angular入门实战时创建的。",["硬件设备"]),
    new Product(4,"第四个商品",1.94,1.4,"这是一个商品，是我在学习慕课网Angular入门实战时创建的。",["电子产品","硬件设备"]),
    new Product(5,"第五个商品",1.95,3.5,"这是一个商品，是我在学习慕课网Angular入门实战时创建的。",["电子产品"]),
    new Product(6,"第六个商品",1.96,4.6,"这是一个商品，是我在学习慕课网Angular入门实战时创建的。",["图书"])
  ];

   private comments: Comment[] = [
     new Comment(1, 1, "2017-02-01 22:22:22", 'jack', 3.1, "东西不错1"),
     new Comment(2, 1, "2017-02-02 22:22:22", 'Gin', 4.2, "东西不错1"),
     new Comment(3, 1, "2017-02-03 22:22:22", 'tom', 3.3, "东西不错1"),
     new Comment(4, 2, "2017-02-04 22:22:22", 'Jay', 4.4, "东西不错1"),
   ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id:number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProduct(id:number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
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
