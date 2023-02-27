import requests 
from bs4 import BeautifulSoup 
try:
    url = "https://kaspi.kz/shop/c/smartphones/brand-vivo/"

    headers = {
        'user-agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
        'Accept' : '*/*'
    }

    resp = requests.get(url, headers = headers)
    print(resp.status_code)
    soup = BeautifulSoup(resp.content, "html.parser")
    main = soup.find('div', class_='item-cards-grid__cards')
    products = []
    if main: 
        div_lst = main.find_all('div', class_='item-card')
        for div in div_lst:
            print(str(div))
            title = div.find('a', class_='item-card__name').text
            href = div.find('div', class_='item-card__info').a['href']
            img_tag = div.find('img', {'class': 'item-card__image'})
            rating = div.find('div', class_='item-card__rating').span['class']
            rating = rating[2][1:]
            src_attribute = "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf7/heb/61590720249886/vivo-y55-8-gb-128-gb-chernyi-105986595-1.jpg"
            src_attribute1 = "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h46/h23/61590720479262/vivo-y55-8-gb-128-gb-chernyi-105986595-2.jpg"
            src_attribute2 = "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h48/61590720708638/vivo-y55-8-gb-128-gb-chernyi-105986595-3.jpg"
            price = div.find('span', class_='item-card__prices-price').text
            products.append({'title': title, 'url': href, 'price': price, 'img1': src_attribute, 'img2': src_attribute1, 'img3': src_attribute2, 'rating': rating})

    h = open("vivo.json", "w", encoding = 'utf-8')
    h.write(str(products))
    h.close()
except requests.exceptions.HTTPError as err :
    raise SystemExit(err)