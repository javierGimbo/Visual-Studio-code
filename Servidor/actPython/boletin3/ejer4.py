def devolver_definiciones(lista):
    definiones = {}
    with open("definiciones.txt", "r") as file:
        for linea in file:
            clave, valor = linea.split(": ")
            if clave in lista: 
                 definiones[clave] = valor
        return definiones

listaPalabras = ["manzana", "balon"]
definicion = devolver_definiciones(listaPalabras)
print(definicion)