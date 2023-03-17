def double_power(a, b):
    for i in range(1, b):
        a *= a 
    return a 

a, b = list(map(int, input().split()))
print(double_power(a, b))