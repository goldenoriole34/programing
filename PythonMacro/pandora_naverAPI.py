from http import client


redirect_uri = 'https://localhost:8888/'

client_id = ''
client_secret = ''

state = "REWERWERTATE"

# 코드발급
url = f'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id={client_id}&redirect_uri={redirect_uri}&state={state}'
print(url)