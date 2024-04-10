dic = {'manzana': 'fruta que crece en los arboles', 'balon': 'cosa para practicar deporte'}
with open("definiciones.txt", 'w') as file:
    for key, value in dic.items():
        file.write(f"{key}: {value}\n")
