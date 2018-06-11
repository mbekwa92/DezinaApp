import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

import { ProductProvider } from "../../providers/product/product";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private productService:ProductProvider  private http:Http, public navCtrl: NavController) {

  }

  ionViewDidLoad(){
   this.productService.getProducts()
   .subscribe(response => console.log(response)); 
  }

}
