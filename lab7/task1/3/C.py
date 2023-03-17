import math

a, b = int(input()), int(input())

for i in range(a, b+1):
    sqrt_i = math.sqrt(i)
    if int(sqrt_i + 0.5) ** 2 == i:
        print(i, end=' ')