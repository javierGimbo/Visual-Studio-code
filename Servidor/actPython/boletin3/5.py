def agregar_palabra_y_definicion():
    palabra = "mascota"
    definicion = "animal de compañia"
    with open("definiciones.txt", "a") as file:
        file.write(f"{palabra}: {definicion}\n")
    print("Palabra y definición agregadas.")

agregar_palabra_y_definicion()
