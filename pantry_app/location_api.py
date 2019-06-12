import requests

r = requests.get('https://api.kroger.com/v1/locations?filter.zipCode.near=30315')


print(r.json())