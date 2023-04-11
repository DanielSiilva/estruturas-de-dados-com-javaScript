// Iterando sobre arrays multidimensionais em JavaScript

// Vamos enviar todos os seus elementos para o console. Para fazer isso, precisamos executar dois loops aninhados

let arr1 = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

for(let subArr of arr1){
    for(let elem of subArr){
        // console.log(elem % 2 === 0)
       console.log(elem);
    }
}
// Dado um array 2D de números:

let arr2 = [[1, 2, 3], [4, 5], [6]];

for( let x of arr2){
    for(let y of x){
        // console.log(y)
    }
}

// Iterando pelo comum para
// As matrizes também podem ser iteradas não por meio do for-ofloop, mas usando o comum for:

let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		console.log(arr[i][j]);
	}
}