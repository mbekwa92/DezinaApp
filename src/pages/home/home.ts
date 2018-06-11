import { Component } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

import { NavController } from 'ionic-angular';
import { ProductProvider } from "../../providers/product/product";
import {ProductDetailPage} from "../product-detail/product-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allProducts = [];

  constructor(private productService:ProductProvider,private http: Http, public navCtrl: NavController) {

  }

  ionViewDidLoad(){
   this.productService.getProducts()
   .subscribe((response) => 
    {
      this.allProducts = response;
    });  
  }
  goToProductDetailPage(product){
    
    this.navCtrl.push(ProductDetailPage, { 
      productDetails: product
    });
  }
}
