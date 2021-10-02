def tigaXplus1(x):
    if x > 1:
         return (x,) + tigaXplus1((3 * x + 1) if x % 2 else x//2)
    return (1,)
