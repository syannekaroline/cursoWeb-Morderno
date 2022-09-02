//primeiras aulas :
//consolo.log("") - usado pra exibir uma msg na tela (print)
console.log("Hello world!!!!!");

//trabalhando com dados - variáveis
//criando variáveis - armazenamento de infos - letras maiúsculas e minúsculas IMPORTAM
var nome = "syanne"
sobrenome = "karoline"
let idade = 19

console.log(idade)
console.log(nome,sobrenome)
console.log(nome+sobrenome)

//identificador - nomer que se dá pras variáveis - deve-se decidir por bons nomes
// + concatena sem espaço, "," concatena com um espaço
preco = 19.9;desconto=0.4
console.log(9.9*0.6)
console.log("preço com desconto:",preco*(1-desconto))

//tipos de dados básicos em javascript
/* 
no js se tem 'typeof (dado)' o dado pode ser literal ou uma variável
js não faz diferenciação entre números inteiros e decimais - todos são number (floats e inteiros)

tipos básicos :
number - números decimais e inteiros
string - sequẽncias de caracteres - entre aspas simples ou duplas 
boolean - true or false
*/
flag = true
console.log("Tipos de dados básicos em js: \n")
console.log(typeof nome)
console.log(typeof idade)
console.log(typeof flag)

//dados podem ser variáveis ou constantes
const constante = 'syanne karoline'

console.log(constante)
//constante = 'outro nome' - vai dar erro pois não se pode alterar/modificaruma constante 

//estrutura de dados: visa organizar e administrar dados
// 1- lista 2-filas(FIFO- first in first out) 3-pilhas(LIFO- lest in first out) 4-árvores 5-tabelas(banco de dados) 6- estrutura de dados básicas(int, real, string, bool) 7- esctritiras persolanizadas(struct c++)
//operações - atribuições, aritméticas, relações, lógicas