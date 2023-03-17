N = int(input())
A = list(map(int, input().split()))
k = 0
for i in range(1, N):
    if A[i] > A[i-1]:
        k += 1
print(k)