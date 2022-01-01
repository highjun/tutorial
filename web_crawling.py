import requests
from bs4 import BeautifulSoup

#1. 네이버 뉴스
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
}

response = requests.get("https://news.naver.com/main/home.nhn", headers = headers)
soup = BeautifulSoup(response.text, "html.parser")
tags = soup.find_all('a', class_='lnk_hdline_article')
for tag in tags:
    print(tag.text.strip())