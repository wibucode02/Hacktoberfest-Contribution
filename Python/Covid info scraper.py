import requests
from bs4 import BeautifulSoup

url = 'https://www.worldometers.info/coronavirus'
page = requests.get(url)
soup = BeautifulSoup(page.text, 'html.parser')
info=soup.find_all('div',class_="maincounter-number")

print("Total Case:",str(info[0].text).strip())
print("Total Death:",str(info[1].text).strip())
print("Total Recover:",str(info[2].text).strip())
