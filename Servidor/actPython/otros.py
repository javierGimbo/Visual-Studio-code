import math

# Ejercicio 1: Operaciones Básicas
def operaciones_basicas():
    num1 = float(input("Introduce el primer número: "))
    num2 = float(input("Introduce el segundo número: "))
    
    suma = num1 + num2
    resta = num1 - num2
    multiplicacion = num1 * num2
    
    # Manejo de la división por cero
    if num2 != 0:
        division = num1 / num2
    else:
        division = "No se puede dividir entre cero"
    
    print("Suma:", suma)
    print("Resta:", resta)
    print("Multiplicación:", multiplicacion)
    print("División:", division)

# Ejercicio 2: Calcular el Área de un Rectángulo
def calcular_area_rectangulo(base, altura):
    return base * altura

# Ejercicio 3: Calcular el Área de un Círculo
def calcular_area_circulo(radio):
    return math.pi * radio ** 2

# Ejercicio 4: Convertir Celsius a Fahrenheit
def celsius_a_fahrenheit(celsius):
    return celsius * 9/5 + 32

# Ejercicio 5: Números Primos
def es_primo(numero):
    for i in range(2, int(math.sqrt(numero)) + 1):
        if numero % i == 0:
            return False
    return True

# Ejercicio 6: Calcular Factorial
def calcular_factorial(n):
    factorial = 1
    for i in range(2, n + 1):
        factorial *= i
    return factorial

# Ejercicio 7: Generar Fibonacci
def generar_fibonacci(n):
    fibonacci = [0, 1]
    for i in range(2, n):
        fibonacci.append(fibonacci[-1] + fibonacci[-2])
    return fibonacci

# Ejercicio 8: Contar Vocales
def contar_vocales(cadena):
    vocales = {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0}
    for char in cadena:
        if char.lower() in vocales:
            vocales[char.lower()] += 1
    return vocales

# Ejercicio 9: Encontrar el Máximo Común Divisor (MCD)
def calcular_mcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

# Ejercicio 10: Ordenar una Lista
def ordenar_lista(lista):
    return sorted(lista)

# Ejemplos de uso de las funciones:
operaciones_basicas()
print("Área del rectángulo:", calcular_area_rectangulo(5, 4))
print("Área del círculo:", calcular_area_circulo(3))
print("Celsius a Fahrenheit:", celsius_a_fahrenheit(25))
print("¿Es primo el número 6?", es_primo(6))
print("Factorial de 5:", calcular_factorial(5))
print("Los primeros 10 números de Fibonacci:", generar_fibonacci(10))
print("Recuento de vocales en 'Hola Mundo':", contar_vocales("Hola Mundo"))
print("Máximo Común Divisor de 24 y 36:", calcular_mcd(24, 36))
print("Lista ordenada:", ordenar_lista([5, 2, 8, 1, 9]))
