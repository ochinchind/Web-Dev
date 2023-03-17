length = 109
start = 0

v = int(input())
t = int(input())

distance = v * t

if v >= 0:
    position = (start + distance) % length
else:
    position = (start - distance) % length

print(position)