#include <stdio.h>
 
int CountDigit(int n)
{
    if (n/10 == 0)
        return 1;
    return 1 + CountDigit(n / 10);
}
 
int main()
{
    int n = 1945;
    printf("Jumlah digit: %d", CountDigit(n));
    return 0;
}