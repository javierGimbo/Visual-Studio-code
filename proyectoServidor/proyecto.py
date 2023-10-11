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
    # .capitalize() es para que ponga siempre la primera letra en mayuscula
    nombre_equipo = input("Ingresa el nombre del equipo: ").capitalize()
    
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
        else:
            indice+=1
    # Si el equipo no existe pone este mensaje
    if not encontrado:
         print("No se encontró un equipo con ese nombre.")

    # Pregunto de que conferencia quiere saber los equipos     
    conferenciaEquipos = input("¿De que conferencia quieres saber los equipos? WEST/EAST: ").capitalize()
    print("EQUIPOS DE LA CONFERENCIA " + conferenciaEquipos)
    indice=0
    encontrado=False
    while indice<len(data2) and encontrado!=True:
  
        if data2[indice].get("conference") == conferenciaEquipos:
            print("Nombre completo:", data2[indice]["full_name"])
            indice+=1
           
        else:
            indice+=1       
   
    divisionEquipos = input("¿De que división quieres saber los equipos?: ").capitalize()
    print("EQUIPOS DE LA DIVISIÓN " + divisionEquipos)
    indice=0
    encontrado=False
    while indice<len(data2) and encontrado!=True:
        if data2[indice].get("division") == divisionEquipos:
            print("Nombre completo:", data2[indice]["full_name"])
            indice+=1    
        else:
            indice+=1

else:
        # Si no carga el archivo Json muestra el siguiente mensaje
    print("Error al obtener los datos. Código de estado:", response.status_code)
