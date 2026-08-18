#include <stdio.h>

int main()
{
    char N1_1, N1_2, N1_3;
    char N2_1, N2_2, N2_3;
    int resultado1, resultado2;
    float Q;

    printf("Digite o valor de N1:");
    scanf(" %c", &N1_1);
    printf("Digite o valor de N1:");
    scanf(" %c", &N1_2);
    printf("Digite o valor de N1:");
    scanf(" %c", &N1_3);
    
    resultado1 = (N1_1 - '0') * 100 + (N1_2 - '0') * 10 + (N1_3 - '0');
    printf("o resultado de N1 é, %d\n", resultado1);
    
    printf("Digite o valor de N2:");
    scanf(" %c", &N2_1);
    printf("Digite o valor de N2:");
    scanf(" %c", &N2_2);
    printf("Digite o valor de N2:");
    scanf(" %c", &N2_3);
    
    resultado2 = (N2_1 - '0') * 100 + (N2_2 - '0') * 10 + (N2_3 - '0');
    printf("o resultado de N2 é, %d\n", resultado2);
    
    Q = (float)resultado1 / resultado2;
    
    printf("o resultado do quociente da divissão de N1 por N2 é %8.3f\n", Q);

}
