def eliminar_palabra(palabra):
    definiciones = {}
    with open("definiciones.txt", "r") as file:
        for linea in file:
            clave, valor = linea.split(": ")
            if clave != palabra:
                definiciones[clave] = valor.strip()

    with open("definiciones.txt", "w") as file:
        for clave, valor in definiciones.items():
            file.write(f"{clave}: {valor}\n")

palabra = "casa"
eliminar_palabra(palabra)
print("Palabra eliminada del diccionario.")
