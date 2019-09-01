#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct s_pessoa {
    char cpf[15];
    char nome[50];
    int idade;
    char rg[13];
}Pessoa;

typedef struct s_pesquisa_pessoa {
    int codigo;
    long posicao;
}PessoaPesquisa;

//
// Pessoa *pesquisarPessoa( int codigo , char *datafile , char *keyfile ){
//     FILE *infos, *registro;
//
//     PessoaPesquisa posicao;
//     Pessoa *result;
//
//     registro = fopen( keyfile , "rb" );
//     while( !feof( registro) ){
//         fread( &posicao , sizeof( PessoaPesquisa) , 1 , registro);
//         if( !feof( registro) ){
//             if( posicao.codigo == codigo ){
//
//                 //Aloca memoria para o registro
//                 result = (Aluno *) malloc( sizeof( Aluno ) );//@todo Verificar se conseguiu
//
//                 //Abre o arquivo de dados e coloca na posição encontrada, lê o registro para a estrutura
//                 infos = fopen( datafile , "rb" );
//                 fseek( infos, posicao.posicao , SEEK_SET );
//                 fread( result , sizeof( Aluno ) , 1 , infos );
//
//
//                 fclose( infos );
//                 fclose( registro);
//
//                 //Retorna a estrutura
//                 return result;
//             }
//         }
//     }
//     fclose( registro);
//     return NULL;
// }

void imprimir(){
  FILE *arq;
  char Linha[200];
  char *result;
  int i;


  arq = fopen("pessoas.txt", "rt");

  if (arq == NULL){
     printf("Problemas na abertura do arquivo\n");
     return;
  }

  i = 1;
  while (!feof(arq)){
      result = fgets(Linha, 200, arq);
      if (result)
        printf("Linha %d : %s",i,Linha);
      i++;
  }
  fclose(arq);
}

int main(){


  int opcao;
    do
    {
        printf(" \n Opções: ");
        printf(" \n 1. Pesquisar Cadastros " );
        printf(" \n 2. Imprimir Cadastros " );
        printf(" \n 3. Cadastrar Pessoa" );
        printf(" \n 4. Para sair. \n " );
        printf(" \n Digite a opção desejada: ");
        scanf("%d", &opcao);
        switch(opcao)
        {
            case 1:
              //  pesquisarPessoa();
            break;
            case 2:
                imprimir();
            break;
            case 3:
              //  cadastrar();
            break;
            default:
                 printf(" \n Opção não existente. ");
            break;
        }
    }
    while(opcao!=4);

  return 0;
}
