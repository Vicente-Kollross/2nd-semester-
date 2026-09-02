#include <stdio.h>

int main()
{
    float a, b;
    scanf("%f %f", &a , &b);

    printf("%f\n", a + b);
    printf("%f\n", a - b);
    printf("%f\n", a * b);
    printf("%f\n", a / b);

    int idade = 0;
    printf("digite sua idade\n");
    scanf("%d", &idade);
    if (idade >= 18) {
        printf("você é maior de idade\n");
    } else {
        printf("você é menor de idade\n");
    }
    
    int x = 0;
    printf("digite um numero para ver se ele é par ou impar\n");
    scanf("%d", &x);
    if (x % 2 == 0) {
        printf("par\n");
    } else {
        printf("impar\n");
    }
    
    int n1, n2, n3;
    printf("digite 3 numeros para ver o maior entre eles\n");
    scanf("%d %d %d", &n1, &n2, &n3);
    
    if (n1 >= n2 && n1 >= n3) {
        printf("O maior numero e: %d\n", n1);
    } else if (n2 >= n1 && n2 >= n3) {
        printf("O maior numero e: %d\n", n2);
    } else {
        printf("O maior numero e: %d\n", n3);
    }
    
    int y;
    printf("digite um numero para ver sua tabuada\n");
    scanf("%d", &y);
    for (int i = 1; i <= 10; i++) {
        printf("%d\n", y * i);
    }
    
    return 0;
}
