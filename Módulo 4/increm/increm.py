class Pessoa:
    def __init__(self):
        self.arg = 0

    def Contador(self):
        self.arg += 1

    def Total(self):
        print(self.arg)


p1 = Pessoa()
p2 = Pessoa()
p3 = Pessoa()


p1.Contador()
p2.Contador()
p3.Contador()

p1.Total()
p2.Total()
p3.Total()
