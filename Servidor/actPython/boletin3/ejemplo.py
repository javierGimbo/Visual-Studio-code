""" #def diccionario(definiciones):
dic = {'manzana': 'fruta que crece en los arboles', 'balon': 'cosa para practicar deporte'}
for key in dic:
    print(key)


dic = {'manzana': 'fruta que crece en los arboles', 'balon': 'cosa para practicar deporte'}                 #distintas formas de recorrer un diccionario
for value in dic.values():
    print(value)
 """

dic = {'manzana': 'fruta que crece en los arboles', 'balon': 'cosa para practicar deporte'}
for key, value in dic.items():
    print(key, value)
