def calculadora(op, num1, num2, num3):
    op = op.upper()
    if op == "SOMA":
        soma = num1 + num2 + num3
        print(soma)
        print("Número real: " + str(soma.real))
        print("Número imaginário: " + str(soma.imag))
    elif op == "SUBTRAÇÃO":
        sub = num1 - num2 - num3
        print(sub)
        print("Número real: " + str(sub.real))
        print("Número imaginário: " + str(sub.imag))
    elif op == "MULTIPLICAÇÃO":
        mult = num1 * num2 * num3
        print(mult)
        print("Número real: " + str(mult.real))
        print("Número imaginário: " + str(mult.imag))
    elif op == "DIVISÃO":
        divisao = num1 / num2 / num3
        print(divisao)
        print("Número real: " + str(divisao.real))
        print("Número imaginário: " + str(divisao.imag))

a = 1+2j
b = complex(3,4)
c = complex(5,6)


calculadora('soma', a, b, c)
