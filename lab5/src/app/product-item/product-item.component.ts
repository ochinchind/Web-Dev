import { Component, Input, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Product } from '../products';
import * as random from 'random';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  @Input() products!: Product[];
  
  buttonClicked = false;
  like(hero: Product){
    for(let i = 0; i < this.products.length; i++){
      if(this.products[i] == hero){
        const btn = document.getElementById(hero.title) as HTMLButtonElement;
        console.log(btn.style);
        if(btn.style.backgroundColor == "rgb(25, 118, 210)" || btn.style.backgroundColor == ""){
          this.products[i].likes += 1;
          btn.style.backgroundColor = "red";
        } else if(btn.style.backgroundColor == "red"){
          this.products[i].likes -= 1;
          btn.style.backgroundColor = "#1976d2";
        }
      }
    }

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  share(a:string) {
    window.open("https://telegram.me/share/url?url=http://localhost:4200/&text="+a);
  }
  next(a : Product){
    const image = document.getElementById(a.href) as HTMLImageElement;
    let keys = Object.keys(a).filter(key => key.startsWith('img'));
    for(let i=0; i < keys.length; i++ ){
      let myValue = a[keys[i]];
      if(myValue == image.src){
        keys = keys.filter(element => element !== keys[i]);
        break;
      };
    };
    const randomIndex = Math.floor(Math.random() * keys.length);
    console.log(randomIndex);
    const myKey = keys[randomIndex];
    image.src = a[myKey];
};

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
