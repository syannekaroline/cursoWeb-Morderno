let a = 7
let b = 97
console.log("Variáveis antes da troca: a="+a,"b:"+b)
let aux=b
b=a
a=aux
console.log("Variáveis depois da troca: a="+a,"b:"+b)
//forma mais prática de trocar
[a,b]=[b,a]
console.log("Variáveis depois da troca: a="+a,"b:"+b)

