// Um Aray sempre inicia na posição [0], que é o primeiro elemento

const listNumber = [1, 0, 3, 4, 5]
// console.log(listNumber[0]) => Para acessar o primeiro elemento


//Exibir todos os elementos de uma array, um dos metodos é usar um laço de repetição

for (let i = 0 ; i < listNumber.length ; i++){
    return listNumber[i]
} 

//Sequencia de Fibonacci => Os dois primeiros numeros da sequencia são 1 e 2, e cada número subsquente é a soma dos dois números anteriores 

const fibonacci = []
fibonacci[1] = 1 
fibonacci[2] = 1

for(let i = 3; i <20; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}

for(let i = 1; i < fibonacci.length; i++){
    console.log(fibonacci[i])
}