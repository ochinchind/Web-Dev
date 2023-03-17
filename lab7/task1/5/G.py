N = 0
while not (1 <= N <= 35):
    N = int(input())

a = []
for i in range(N):
    a.append(int(input()))

for i in range(N//2):
    a[i], a[N-1-i] = a[N-1-i], a[i]

for i in range(N):
    print(a[i], end=" ")
print()