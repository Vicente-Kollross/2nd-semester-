#include <stdio.h>

int main() {
    int x = 0;
    printf("%zu Byte(s)\n", sizeof(x));
    printf("O endereco da variavel x e: %p\n", (void*)&x);
    
    
    float distancia; // em metros
    int tempo; // em segundos
    printf("Digite a distancia em metros: ");
    scanf("%f", &distancia);
    printf("Digite o tempo em segundos: ");
    scanf("%3d", &tempo);
    float velocidade = distancia / tempo;
    printf("velocidade = %.1f m/s\n", velocidade);
    
    
    char nome[] = "Maria";
    char letra = 'A';
    int idade = 20;
    float nota = 9.758;
    printf("Nome: %s\n", nome);
    printf("Letra inicial: %c\n", letra);
    printf("Idade: %d anos\n", idade);
    printf("Nota (sem formatar): %f\n", nota);
    printf("Nota (com 2 casas): %.2f\n", nota);
    printf("Tamanho na memoria: %zu Bytes\n", sizeof(nota));
    printf("Endereco da variavel nota: %p\n", (void*)&nota);
    
    
    const double taxa_desconto = 0.15;
    double salario_bruto, salario_liquido, desconto;
    printf("Digite o salario bruto: ");
    scanf("%lf",&salario_bruto);
    getchar();
    desconto = salario_bruto * taxa_desconto;
    printf("desconto = %.2f\n", desconto);
    salario_liquido = salario_bruto - desconto;
    printf("salario liquido = %.2f\n", salario_liquido);
    
    
    char c = getchar();
    char y = c + 5;
    putchar(y);
    putchar('\n');

    return 0;
    
    
}
