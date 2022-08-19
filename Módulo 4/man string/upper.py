import time

print("Deixar a letra em maiscúlo.\n")
time.sleep(1)

selecionar = "S"

while(selecionar == "S"):

    maior = input("Escreva algo: ").upper() # Usar a função Upper disponivel no python
    print(maior)

    time.sleep(1)
    selecionar = input("\nDeseja continuar ? (S / N) ").upper()
