import requests
import json

# URL del archivo JSON que deseas descargar
url = "https://www.balldontlie.io/api/v1/teams"

try:
    # Realiza una solicitud GET a la URL
    response = requests.get(url)

    # Verifica si la solicitud fue exitosa (código de estado 200)
    if response.status_code == 200:
        # Convierte el contenido JSON en un diccionario de Python
        data = response.json()

        # Ahora puedes trabajar con 'data', que contiene el JSON descargado
        # Por ejemplo, puedes imprimirlo
        print(data)
        
        # O guardar el JSON en un archivo local
        with open("archivo.json", "w") as archivo:
            json.dump(data, archivo, indent=4)
    else:
        print("La solicitud no fue exitosa. Código de estado:", response.status_code)

except Exception as e:
    print("Se produjo un error:", str(e))
