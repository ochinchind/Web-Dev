def min(a, b, c, d):
    min1 = 0
    min2 = 0
    if a < b:
        min1 = a
    else:
        min1 = b
    if c < d:
        min2 = c
    else:
        min2 = d
    if min1 < min2:
        print("Наименьшее из чисел:", min1)
    else:
        print("Наименьшее из чисел:", min2)
    return 0

min(10, 20, 30, 40)