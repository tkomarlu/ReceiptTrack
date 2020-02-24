#Created by Pranav Acharya on October 22, 2019
#Thank you to Data Science Dojo for a very helpful tutorial
#Link: https://www.youtube.com/watch?v=XQgXKtPSzUI
#Created an image scraper that scraped https://expressexpense.com/view-receipts for receipt pictures and downloaded them
#We will be using these images for our project: our application will learn to automatically classify and tabulate a receipt's expenses
#into various expenditure categories by using these receipt pictures as training data

from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import requests
from requests import get  # to make GET request

#Following function from https://stackoverflow.com/questions/7243750/download-file-from-web-in-python-3
def download(url, file_name):
    # open in binary mode
    with open(file_name, "wb") as file:
        # get request
        response = get(url)
        # write to file
        file.write(response.content)

#for p in range(1,21): 21 not included, break up to 1-6,6-11,11-16,16-21
for p in range(1,21): #to scrape thru 20 pages on the site

    num = str(p)
    my_url = "https://expressexpense.com/view-receipts.php?page=" + num
    #print(my_url)

    #using requests instead of urllib
    page_html = requests.get(my_url).text

    #parse html
    page_soup = soup(page_html, "html.parser")
    
    #all entries in the page
    entries = page_soup.findAll("div",{"class":"record"})
    for i in range(50):
        imglink= entries[i].a["data-featherlight"]
        # 'https://expressexpense.com/' + 'imglink'
        image_url = "https://expressexpense.com/" + imglink
        #print(image_url)
        print(50*(p-1) + (i+1))
        download(image_url, "receipt" + str(50*(p-1) + (i+1)) +".jpg")
