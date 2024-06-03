def buscar_definicion(palabra):
    with open("def.txt", "r") as file:
        for linea in file:
            clave, valor= linea.split(": ")
            if palabra == clave:
                return valor
    return "no"

palabra=input("palabra: ")
definicion=buscar_definicion(palabra)
print (definicion)

