#include <stdio.h>

int main(){
    int n;
    scanf("%d", &n);
    
    char s[10000];
    scanf("%s", s);
    
    int total_a = 0;
    int bloco_a = 0;
    
    for(int i = 0; i < n; i++) {
        if (s[i] == 'a') {
            bloco_a++;
        } else {
            if (bloco_a >= 2) {
                total_a += bloco_a;
            }
            bloco_a = 0;
        }
    }
    
    if (bloco_a >= 2) {
        total_a += bloco_a;
    }
    
    printf("%d\n", total_a);
    
    return 0;
    
}
