def buscar_definicion(palabra):
    with open("definiciones.txt", "r") as file:
        for linea in file:
            clave, valor = linea.split(": ")
            if clave == palabra:
                return valor.strip()        #elimina espacios es blanco
    return "La palabra no está en el diccionario."

palabra = "mascota"
definicion = buscar_definicion(palabra)
print(palabra,":", definicion)
