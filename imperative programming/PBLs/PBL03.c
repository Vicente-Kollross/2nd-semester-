#include <stdio.h>

int main()
{
    int M, N;
    scanf("%d %d", &N, &M);
    
    int max_turma[1005];
    for(int j = 0; j < M; j++){
        max_turma[j] = 0;
    }
    
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            int g;
            scanf("%d", &g);
            
            if (g > max_turma[j]) {
                max_turma[j] = g;
            }
        }
    }
    
    int total_alunos = 0;
    for (int j = 0; j < M; j++) {
        int alunos_turma = max_turma[j];
        
        if (alunos_turma < 1) {
            alunos_turma = 1;
        }
        
        total_alunos += alunos_turma;
    }
    
    printf("%d\n", total_alunos);
    
    return 0;
}
