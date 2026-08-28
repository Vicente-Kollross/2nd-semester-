#include <cstdio>

int main()
{
    printf("helloWorld\n");
    printf("PUCPR\n");

    int numeros_inteiros = 10;
    /* PRIMEIRA DECALRAÇAO TEM QUE SEMPRE DEFINIR< APÓS PODE APENAS USAR (numeros_inteiros = 10)*/
    short numeros_pequenos = 1;
    long numeros_longos = 100;
    unsigned int APENAS_POSITIVOS = 10;
    /* unsigned permite apenas armazenar numeros positivos*/
    printf("numeros_inteiros: %d\n",numeros_inteiros);
    /* para printar é necessario declarar que é inteiro novamento %d (decimal) E SEMPRE \n PARA PULAR LINHA*/
    printf("%zu\n", sizeof(numeros_inteiros));
    /* sizeof retorna quantos bites o int (numerosinteiros) oculpa do sistema*/

    float PI = 3.14159;
    double PI_2 = 3.14;
    /* double dobra o tamanho que pode guardar de bits, (long double = numeros imensossss) */
    printf("%f %f\n", PI, PI_2);
    double multiplicaçao_pi = PI * PI_2;
    printf("%f\n", multiplicaçao_pi);
    /* %f para float (double... etc)*/

    char letra = 'A';
    /* para definir apenas uma letra/numero tem que ser '' parenteses simples*/
    printf("%c\n", letra);
    /* %c para char*/
    printf("%d\n", letra);
    letra = letra + 1;
    printf("%c\n", letra);
    printf("%d\n", letra);
    /* se definir uma 'letra' como int vai pegar a tabela ASCII*/

    bool frio = true;
    bool calor = false;
    printf("%d\n", frio);
    printf("%d\n", calor);
    /* true e false como int retorna 1 e 0*/
    return 0;
}
