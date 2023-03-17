n = 10000
a = [0]*n
n1 = int(input())
for i in range(n1):
    a[i] = int(input())
    flag = 0
for i in range(n1-1):
    if ((a[i] < 0) and (a[i+1] < 0)) or ((a[i] > 0) and (a[i+1] > 0)):
        flag = 1
if flag == 1:
    print("YES")
else:
    print("NO")