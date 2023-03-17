n = int(input("N= "))
a = []
for i in range(n):
    print(i)
    a.append(int(input()))
print()

for i in range(n):
    if a[i] % 2 == 0:
        print( i, a[i])