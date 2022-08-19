import time

print("Contar letras digitadas.\n")
time.sleep(1.5)


selecionar = "s"

while(selecionar == "s"):

    letras = input("Digite algo: ")
    print("O que foi digitado tem: ", len(letras), "letras.") # Função Len para contar os caracteres.

    time.sleep(1)
    selecionar = input("\nDeseja continuar ? (S / N) ").lower()
