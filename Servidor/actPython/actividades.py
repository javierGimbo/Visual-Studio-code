import math

# Ejercicio 1
def operaciones_basicas():
    num1 = float(input("Introduce el primer número: "))
    num2 = float(input("Introduce el segundo número: "))
    
    suma = num1 + num2
    resta = num1 - num2
    multiplicacion = num1 * num2
    division = num1 / num2

    
    print("Suma:", suma)
    print("Resta:", resta)
    print("Multiplicación:", multiplicacion)
    print("División:", division)

# Ejercicio 2
def calcular_area_rectangulo():
    base = float(input("Introduce la base: "))
    altura = float(input("Introduce la altura: "))
    return base * altura

# Ejercicio 3
def calcular_area_circulo():
    radio = float(input("Introduce el radio: "))
    return math.pi * radio ** 2

# Ejercicio 4
def celsius_a_fahrenheit():
    celsius = float(input("Introduce los grados celsius para pasarlos a fahrenheit: "))
    return celsius * 9/5 + 32

# Ejercicio 5
def es_primo(numero):
    return true


operaciones_basicas()
print("Área del rectángulo:", calcular_area_rectangulo())
print("Área del círculo:", calcular_area_circulo())
print("Celsius a Fahrenheit:", celsius_a_fahrenheit())


