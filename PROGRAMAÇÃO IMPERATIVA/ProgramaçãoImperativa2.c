#include <stdio.h>


int main() {
    
    unsigned int a;
    unsigned int b;
    printf("\nescreva o primeiro numero: ");
    scanf("%u", &a);
    printf("\nescreva o segundo numero: ");
    scanf("%u", &b);
    
    if (a == b)
        printf("\no numero não pode ser igual");
    else if (a > b)
        printf("\na ordem crescente é: %u, %u", b, a);
    else
        printf("\na ordem crescente é: %u, %u", a, b);



    int k;
    printf("\ndigite (1, 2 ou 3):\n");
    scanf("%d", &k);
    
    switch ( k )
    {
        case 1: printf("\nONE"); break;
        case 2: printf("\nTWO"); break;
        case 3: printf("\nTHREE"); break;
        default: printf("\nDESCONHECIDO");
    }
    
    
    
    float x, y, resultado = 0;
        char O;
    
        printf("\ndigite o valor do primeiro numero: ");
        scanf("%f", &x);
    
        getchar(); // Consome o \n do teclado
    
        printf("\ndigite a operação desejada( +, /, *, - ) : ");
        scanf("%c", &O);
    
        printf("\ndigite o valor do segundo numero: ");
        scanf("%f", &y);
    
        switch ( O ) {
            case '+': 
                resultado = x + y;
                break;
    
            case '/':
                if (y != 0) {
                    resultado = x / y;
                } else {
                    printf("\nErro: Divisao por zero!\n");
                    return 1; // Encerra o programa se houver erro
                }
                break;
    
            case '*':
                resultado = x * y;
                break;
    
            case '-':
                resultado = x - y;
                break;
    
            default:
                printf("\nOperação inválida!\n");
                return 1; // Encerra o programa se o operador for inválido
        }
    
        printf("\nO resultado da conta é: %.2f\n", resultado);
    
        return 0;
    
    
    
    
    return 0;
    
}
