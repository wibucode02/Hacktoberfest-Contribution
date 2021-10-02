#include <stdio.h>

int main(void)
{
  int i, j;
	for (i = 1; i <= 6; i++) {
		for (j = 6; j >= i;)
		printf("%d ", j--);
		putchar('\n');
	}
	return 0;
}
