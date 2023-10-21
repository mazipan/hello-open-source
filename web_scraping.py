import requests
from bs4 import BeautifulSoup

# Define the URL of the website you want to scrape
url = 'https://example-news-site.com'

# Send an HTTP GET request to the URL
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the HTML content of the page
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find and extract the headlines
    headlines = soup.find_all('h2', class_='headline')  # Adjust the selector as needed

    # Print the extracted headlines
    for headline in headlines:
        print(headline.text)
else:
    print(f"Failed to retrieve the web page. Status code: {response.status_code}")
