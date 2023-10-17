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
    data2 = data.get("data") #Tiene la lista de todos los equipos

    continuar = True

    while continuar:
        encontrado = False

        while not encontrado:
            # Pide al usuario el nombre de un equipo
            # .capitalize() es para que ponga siempre la primera letra en mayúscula
            nombre_equipo = input("Ingresa el nombre del equipo: ").capitalize()

            # Busca el equipo con el nombre proporcionado en los datos JSON
            indice = 0
            while indice < len(data2) and not encontrado:
                if data2[indice].get("name") == nombre_equipo:
                    print("Nombre completo:", data2[indice]["full_name"])
                    print("Abreviatura:", data2[indice]["abbreviation"])
                    print("Ciudad:", data2[indice]["city"])
                    print("Conferencia:", data2[indice]["conference"])
                    print("División:", data2[indice]["division"])
                    encontrado = True
                indice += 1
            # Si el equipo no existe pone este mensaje
            if not encontrado:
                print("No se encontró un equipo con ese nombre.")

        encontrado = False

        while not encontrado:
            # Pregunto de qué conferencia quiere saber los equipos
            conferenciaEquipos = input("¿De qué conferencia quieres saber los equipos? WEST/EAST: ").capitalize()
            print("EQUIPOS DE LA CONFERENCIA " + conferenciaEquipos)

            # Verificar si la conferencia proporcionada existe en los datos JSON
            conferencia_existente = any(data2[indice].get("conference") == conferenciaEquipos for indice in range(len(data2)))

            if conferencia_existente:
                indice = 0
                while indice < len(data2):
                    if data2[indice].get("conference") == conferenciaEquipos:
                        print("Nombre completo:", data2[indice]["full_name"])
                    indice += 1
                encontrado = True
            else:
                print("No existe esta conferencia.")

        encontrado = False

        while not encontrado:
            # Se pide de qué división se quiere saber los equipos
            divisionEquipos = input("¿De qué división quieres saber los equipos?: ").capitalize()
            print("EQUIPOS DE LA DIVISIÓN " + divisionEquipos)

            # Verificar si la división proporcionada existe en los datos JSON
            division_existente = any(data2[indice].get("division") == divisionEquipos for indice in range(len(data2)))

            if division_existente:
                indice = 0
                while indice < len(data2):
                    if data2[indice].get("division") == divisionEquipos:
                        print("Nombre completo:", data2[indice]["full_name"])
                    indice += 1
                encontrado = True
            else:
                print("No existe esta división.")

        respuesta = input("¿Quieres seguir buscando equipos? SI/NO: ").lower()
        if respuesta != "si":
            continuar = False


#prueba de commit