import requests
import json

# URL del JSON
url = "https://www.balldontlie.io/api/v1/teams"

# Realiza la solicitud HTTP para obtener el JSON
response = requests.get(url)

# Verifica si la solicitud fue exitosa
if response.status_code == 200:
    # Convierte la respuesta JSON en un diccionario de Python
    data = json.loads(response.text)
    data2 = data.get("data")

    # Pide al usuario el nombre de un equipo
    # Suponemos que el usuario siempre va a poner la primera letra en mayuscula por ejemplo: "Lakers"
    nombre_equipo = input("Ingresa el nombre del equipo: ")

    # Busca el equipo con el nombre proporcionado en los datos JSON
    indice=0
    encontrado=False

    while indice<len(data2) and encontrado!=True:

        if data2[indice].get("name") == nombre_equipo:
            print("Nombre completo:", data2[indice]["full_name"])
            print("Abreviatura:", data2[indice]["abbreviation"])
            print("Ciudad:", data2[indice]["city"])
            print("Conferencia:", data2[indice]["conference"])
            print("División:", data2[indice]["division"])
            encontrado=True
            #break
        else:
        # Si el equipo no existe pone este mensaje
           
            indice+=1
            
    print("No se encontró un equipo con ese nombre.")
    ''' for equipo in data["data"]:
        if equipo["name"] == nombre_equipo:
            print("Nombre completo:", equipo["full_name"])
            print("Abreviatura:", equipo["abbreviation"])
            print("Ciudad:", equipo["city"])
            print("Conferencia:", equipo["conference"])
            print("División:", equipo["division"])
            #break
    else:
        # Si el equipo no existe pone este mensaje
        print("No se encontró un equipo con ese nombre.")'''
else:
        # Si no carga el archivo Json muestra el siguiente mensaje
    print("Error al obtener los datos. Código de estado:", response.status_code)