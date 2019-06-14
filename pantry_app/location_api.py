import requests

# r = requests.get('https://api.kroger.com/v1/locations?filter.zipCode.near=30315')

r = requests.get('https://www.zip-codes.com/storelocator/get-store.asp?apikey=VRGU4V2LJSUL9OKS381B')

# r = requests.get('https://api.github.com/events')

# print(r.text)
print(r.json())