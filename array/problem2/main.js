/*
Q. Find maximum value of Sum( i*arr[i]) with only rotations on given array allowed !
*/


function rotateRight(array, rotateByCount){

    for(let count=0; count<rotateByCount; count++){
        let temp = array[0];

        for(let i=0; i<array.length; i++){
            let nextElementIdx = i+1

            // check last index condition here
            if (i == (array.length - 1)){
                nextElementIdx = 0
            }

            let temp2 = array[nextElementIdx]

            array[nextElementIdx] = temp
            temp = temp2
        }
    }
    return array

}


function maxOfSumOfRotationsOfArray(array){

    let sumOfRotationArray = array.map((value, index, arr)=>{
        array = rotateRight(array, 1)

        return array.reduce((previousReturnVal, currentIndxValue, curIndx, arr)=>{
            return previousReturnVal + (currentIndxValue * curIndx)
        }, 0)
    })
    
    return sumOfRotationArray.reduce((previousReturnVal, currentIndxValue, curIdx, arr)=>{
        return previousReturnVal > currentIndxValue ? previousReturnVal  : currentIndxValue
    }, sumOfRotationArray[0])

}

// rotateRight([1,2,3,4], 2)
console.log(maxOfSumOfRotationsOfArray([1,2,3,4,5]))