def buscar_palabra(palabra):
    with open("definiciones.txt", "r") as file:
        for linea in file:
            clave, valor = linea.split(": ")
            if palabra == clave:
                return valor
    return "no está"


palabra = "taza"
definicion = buscar_palabra(palabra)
print(definicion)


