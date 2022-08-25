

function mapPositiveNegative(array){

    let {positiveCount, negativeCount} = array.reduce((previousVal, currentVal, idx, arr)=>{

        if(currentVal < 0){
            previousVal.negativeCount += 1
        }
        else if(currentVal > 0){
            previousVal.positiveCount += 1
        }
        
        return previousVal

    }, {positiveCount:0, negativeCount: 0})

    if (positiveCount != negativeCount){
        throw "positive and negavtive count didn't match in array" 
    }

    array.map((value, index, array)=>{
        if(value < 0 && index % 2 == 0){
            let temp = array[index]
            array[index] = array[index+1]
            array[index+1] = temp
        }
        else if(value > 0 && index % 2 != 0){
            let temp = array[index]
            array[index] = array[index+1]
            array[index+1] = temp
        }
    })
    console.log(array)
}

mapPositiveNegative([-1, 0, 1, 2,-4, -1])