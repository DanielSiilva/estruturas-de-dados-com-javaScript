const temperatureAverage1 = [2, 3,4 ,6, 8]
const temperatureAverage2 = [9, 10, 22, 34, 56]

const totalAverage = [temperatureAverage1, temperatureAverage2]

for(let i = 0; i < totalAverage.length; i++){
    for(let j = 0; j < totalAverage[i].length; j++){
        console.log(totalAverage[i][j])
    }
} 
