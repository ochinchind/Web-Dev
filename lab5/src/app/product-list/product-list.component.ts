import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { myhuawei1, myiphone1, mysamsung1, myvivo1, myxiaomi1, Product, products1, Productss } from '../products';
import * as random from 'random';
import { Directive, HostListener } from "@angular/core";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productss : Product[][] = [];
  ngOnInit(): void {
    this.productss.push(myiphone1);
    this.productss.push(myxiaomi1);
    this.productss.push(mysamsung1);
    this.productss.push(myhuawei1);
    this.productss.push(myvivo1);
  }
  products = products1;
  selectedProduct?: Product [];
  onSelect(hero: Product []): void {
    this.selectedProduct = hero;
  }
  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/