
import * as samsung from './samsung.json';
import * as xiaomi from './xiaomi.json';
import * as iphone from './iphone.json';
import * as vivo from './vivo.json';
import * as huawei from './huawei.json';
import axios from 'axios';
import cheerio from 'cheerio';
/*
import puppeteer, { Puppeteer } from 'puppeteer';

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max-min) +min);
}

let sleep_for = async (page: puppeteer.Page, min: number, max: number) => {
  let sleep_duration = randomIntFromInterval(min, max);
  console.log('waiting for ', sleep_duration / 1000, 'seconds');
  await page.waitForTimeout(sleep_duration);
}

let main_actual = async () => {
  try {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    const URL = 'https://kaspi.kz/shop/c/smartphones/class-apple/' 
    await page.setViewport({
      width:1280, height:800, deviceScaleFactor: 1,
    });
    await page.goto(URL, {waitUntil: 'networkidle2'});
    await sleep_for(page, 1000, 2000);

  } catch (e) {
    console.log(e);
  }

}

let main = async () => {
  await main_actual();
}

main();

/*
interface Products {
  title: string;
  url: string;
  price: string;
}


const sendGetRequest = async () => {
    try {
      const url = 'https://kaspi.kz/shop/c/smartphones/class-apple/';

      const headers = {
        'Accept': '',
        'Access-Control-Allow-Origin': '*',
      };

      const response = await axios.get(url, { headers });
      console.log(response.status);

      const $ = cheerio.load(response.data);
      const main = $('div.item-cards-grid__cards');
      const products123: Products[] = [];

      if (main) {
        const divList = main.find('div.item-card');
        divList.each((index, element) => {
          console.log(element.toString());
          const title = $(element).find('a.item-card__name').text();
          const href = $(element).find('div.item-card__info > a').attr('href');
          const price = $(element).find('span.item-card__prices-price').text();
          console.log(title);
          //products123.push({ title: title, url: href ?? "", price: price });
        });
      }

      const jsonString = JSON.stringify(products123, null, 2);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.toJSON());
      } else {
        console.error(error);
      }
    }
}

sendGetRequest();
*/
export interface Product1 {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface Product {
  [key: string]: any;
  title: string;
  price: string;
  href: string;
  img1: string;
  img2: string;
  img3: string;
  rating: string;
  likes: number;
}

export interface Productss {
  xiaomi: Product[];
  iphone: Product[];
}

const parsedxiaomi = JSON.parse(JSON.stringify(xiaomi));
const parsediphone = JSON.parse(JSON.stringify(iphone));
const parsedhuawei = JSON.parse(JSON.stringify(huawei));
const parsedsamsung = JSON.parse(JSON.stringify(samsung));
const parsedvivo = JSON.parse(JSON.stringify(vivo));
//console.log(parsedData[0].title);

let myxiaomi : Product[] = [];
let myiphone : Product[] = [];
let mysamsung : Product[] = [];
let myvivo : Product[] = [];
let myhuawei : Product[] = [];
function func(){ 
  for(let i in parsedxiaomi) { 
    
     myxiaomi.push({title:parsedxiaomi[i].title, price: parsedxiaomi[i].price, href: parsedxiaomi[i].url, img1: parsedxiaomi[i].img1, img2: parsedxiaomi[i].img2,img3: parsedxiaomi[i].img3, rating: parsedxiaomi[i].rating, likes: 0});
     myiphone.push({title:parsediphone[i].title, price: parsediphone[i].price, href: parsediphone[i].url, img1: parsediphone[i].img1, img2: parsediphone[i].img2,img3: parsediphone[i].img3, rating: parsediphone[i].rating, likes: 0});
     mysamsung.push({title:parsedsamsung[i].title, price: parsedsamsung[i].price, href: parsedsamsung[i].url, img1: parsedsamsung[i].img1, img2: parsedsamsung[i].img2,img3: parsedsamsung[i].img3, rating: parsedsamsung[i].rating, likes: 0});
     myvivo.push({title:parsedvivo[i].title, price: parsedvivo[i].price, href: parsedvivo[i].url, img1: parsedvivo[i].img1, img2: parsedvivo[i].img2,img3: parsedvivo[i].img3, rating: parsedvivo[i].rating, likes: 0});
     myhuawei.push({title:parsedhuawei[i].title, price: parsedhuawei[i].price, href: parsedhuawei[i].url, img1: parsedhuawei[i].img1, img2: parsedhuawei[i].img2,img3: parsedhuawei[i].img3, rating: parsedhuawei[i].rating, likes: 0});
  
  };

}; 
func();
let myproductsss : Productss;
myproductsss = {xiaomi: myxiaomi, iphone: myiphone};
console.log(myproductsss);
//console.log(parsedData1);


export const products1 = myproductsss;
export const products = myxiaomi;
export const myxiaomi1 = myxiaomi;
export const myiphone1 = myiphone;
export const mysamsung1 = mysamsung;
export const myvivo1 = myvivo;
export const myhuawei1 = myhuawei;
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/