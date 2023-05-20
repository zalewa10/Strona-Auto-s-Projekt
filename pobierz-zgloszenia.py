import json
import requests

soliditems=requests.get("https://formsubmit.co/api/get-submissions/63382fc40ea015f8a8af24c11f8fe6020626d4424357624ee39f3648296f1889")
try:
    data = soliditems.json()
except json.decoder.JSONDecodeError:
    print("Niepoprawny format")
else:
    with open('lista.json', 'w') as f:
        json.dump(data, f)

