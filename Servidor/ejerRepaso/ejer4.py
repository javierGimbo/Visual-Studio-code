def buscar_definicion(lista):
    definiciones={}
    with open("def.txt", "r") as file:
        for linea in file:
            clave, valor= linea.split(": ")
            if clave in lista:
                definiciones[clave] = valor
    return definiciones

listapa={"silla", "libro"}
definicion=buscar_definicion(listapa)
print (definicion)

