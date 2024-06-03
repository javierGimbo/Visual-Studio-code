diccionario = {'libro': 'sirve para leer', 'silla': 'sitio para sentarse'}

with open("def.txt", "w") as file:
    for clave, valor in diccionario.items():
        file.write(f"{clave}: {valor}\n")
