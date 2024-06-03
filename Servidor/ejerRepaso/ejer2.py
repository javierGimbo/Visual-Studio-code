diccionario={}
with open("def.txt", "r") as file:
    for x in file:
        clave, valor=x.split(": ")
        print(x)