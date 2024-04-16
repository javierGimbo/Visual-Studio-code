import os

def cargar_tareas():
    if os.path.exists("tareas.txt"):
        with open("tareas.txt", "r") as archivo:
            return [linea.strip() for linea in archivo.readlines()]
    else:
        return []

def guardar_tareas(tareas):
    with open("tareas.txt", "w") as archivo:
        for tarea in tareas:
            archivo.write(tarea + "\n")
    print("Tareas guardadas")

def agregar_tarea(tareas):
    nueva_tarea = input("Ingrese la nueva tarea: ")
    tareas.append(nueva_tarea)
    print("Tarea agregada correctamente.")

def mostrar_tareas_pendientes(tareas):
    if len(tareas) == 0:
        print("No hay tareas pendientes.")
    else:
        print("Lista de tareas pendientes:")
        for i in range(len(tareas)):
            tarea = tareas[i]
            print(f"{i + 1}. {tarea}")


def eliminar_tarea(tareas):
    print("Lista de tareas:")
    for i, tarea in enumerate(tareas):
        print(f"{i + 1}. {tarea}")
    
    numero_tarea = int(input("Ingrese el número de la tarea que desea eliminar: ")) - 1
    tarea_eliminada = tareas.pop(numero_tarea)
    print(f"Tarea '{tarea_eliminada}' eliminada correctamente.")

tareas = cargar_tareas()

while True:
    print("Menu:")
    print("1. Agregar tarea")
    print("2. Editar tarea")
    print("3. Eliminar tarea")
    print("4. Marcar tarea")
    print("5. Ver todas las tareas pendientes")
    print("6. Guardar lista de tareas")
    print("7. Salir")

    opcion = input("Elige una opcion: ")

    if opcion == "1":
        agregar_tarea(tareas)
    elif opcion == "2":
        print("Opción 2")
    elif opcion == "3":
        eliminar_tarea(tareas)
    elif opcion == "4":
        print("Opción 4")
    elif opcion == "5":
        mostrar_tareas_pendientes(tareas)
    elif opcion == "6":
        guardar_tareas(tareas)
    elif opcion == "7":
        print("¡Adiós!")
        break
    else:
        print("Opción no válida")
