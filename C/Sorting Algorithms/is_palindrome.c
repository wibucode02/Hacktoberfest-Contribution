#include <stdio.h>

int isPalindrome(char *str, int len)
{
    if (len < 0)
        return 0;

    return (len < 2) ||
           (str[0] == str[len - 1] && isPalindrome(str + 1, len - 2));
}

int main(void)
{
    char s[] = "kasur rusak";

    printf("isPalindrome: (\"%s\") is %s\n",
           s, isPalindrome(s, sizeof(s) - 1) ? "TRUE" : "FALSE");

    return 0;
}