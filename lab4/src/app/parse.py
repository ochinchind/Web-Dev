import requests 
from bs4 import BeautifulSoup 
try:
    url = "https://kaspi.kz/shop/c/smartphones/class-apple/"

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
            price = div.find('span', class_='item-card__prices-price').text
            products.append({'title': title, 'url': href, 'price': price})


    h = open("word.json", "w", encoding = 'utf-8')
    h.write(str(products))
    h.close()
except requests.exceptions.HTTPError as err :
    raise SystemExit(err)