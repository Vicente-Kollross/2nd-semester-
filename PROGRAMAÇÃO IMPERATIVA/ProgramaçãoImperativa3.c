#include <stdio.h>

int main() {
 
    int numeros[10];

    for (int i = 0; i < 10; i++) {
        numeros[i] = (i + 1) * 5;
    }

    printf("--- Elementos do Vetor ---\n");
    for (int i = 0; i < 10; i++) {
        printf("Posicao [%d]: %d\n", i, numeros[i]);
    }



    int tabela[3][4];

    for (int linha = 0; linha < 3; linha++) {
        for (int coluna = 0; coluna < 4; coluna++) {
            tabela[linha][coluna] = linha + coluna; 
        }
    }

    printf("--- Elementos da Matriz ---\n");
    for (int linha = 0; linha < 3; linha++) {
        for (int coluna = 0; coluna < 4; coluna++) {
            printf("%d\t", tabela[linha][coluna]);
        }
        printf("\n");
    }
    return 0;
}
