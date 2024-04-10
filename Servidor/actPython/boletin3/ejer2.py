diccionario={}
with open ("definiciones.txt", "r") as file:
    for i in file:
        key, value = i.split(": ")
        print(i)