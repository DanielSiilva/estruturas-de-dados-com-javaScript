//Inserindo um elemento no final do array

//Referenciando a ultima posição

const listNumber = [1,2,3,4]
listNumber[listNumber.length] = 5

// console.log(listNumber);

//Metodo Push

listNumber.push(6, 7, 8)

//console.log(listNumber)

//Na Primeira posição

Array.prototype.insertFirstPosition = function(value){
    for(let i = this.length; i >=0; i++){
        this[i] = this[i - 1]
    }

    this[0] = value
}
//console.log(listNumber.insertFirstPosition(-1));

//Metodo unshift => inserir no inicio do array

listNumber.unshift(10, 11)
console.log(listNumber);

