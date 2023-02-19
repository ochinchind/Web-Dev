
import * as data from './word.json';
import axios from 'axios';
import cheerio from 'cheerio';
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
  title: string;
  price: string;
  href: string;
}

const parsedData = JSON.parse(JSON.stringify(data));
//console.log(parsedData[0].title);

let myProduct : Product[] = [];
function func(){ 
  for(let i in parsedData) { 
     myProduct.push({title:parsedData[i].title, price: parsedData[i].price, href: parsedData[i].href });
  }; 
  return myProduct;
}; 
const parsedData1 = func();
//console.log(parsedData1);


export const products = parsedData1;
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/