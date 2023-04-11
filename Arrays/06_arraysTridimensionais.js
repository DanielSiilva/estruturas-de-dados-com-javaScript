let firstWeek = [] ;
let secondWeek = [];

let month = [];

const temperatureAverage1 = [2, 3,4 ,6, 8, 90]
const temperatureAverage2 = [9, 10, 30, 56, 71, 40]

const temperatureAverage3 = [2, 33.4, 66.5, 70.50, 55]
const temperatureAverage4 = [9, 10, 22, 34, 56, 70, 66.60]

firstWeek = [temperatureAverage1, temperatureAverage2];
secondWeek = [temperatureAverage3, temperatureAverage4];

month = [firstWeek, secondWeek] ;

// Percorrendo um array tridimensional 

for(let x = 0; x < month.length ; x++){
    for(let y = 0; y < month[x].length; y++){
        for(let z = 0; z < month[x][y].length ; z++){
            console.log(month[x][y][z])
        }
    }
}




