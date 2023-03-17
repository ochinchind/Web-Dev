
def symm(a):
    astr = str(a)
    if(len(astr) != 4):
        return false
    return astr == astr[::-1]


realans = int(input())
ans = int(input())

if(symm(realans)):
    if(ans == 1):
        print("YES")
    else:
        print("NO")
else:
    if(ans == 1):
        print("NO")
    else: 
        print("YES")