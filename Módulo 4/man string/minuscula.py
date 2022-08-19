import time

print("Deixar a letra em minusculo.\n")
time.sleep(2)

selecionar = "s"

while(selecionar == "s"):

    text = input("Digite algo para teste: ").lower() #Usando a função lower no python, para deixar as letras minusculas.
    print(text)

    time.sleep(1)
    selecionar = input("\nDeseja continuar ? (S / N) ").lower()
