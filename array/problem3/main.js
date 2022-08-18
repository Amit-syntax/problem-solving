

function rotateArrayLeft(array, rotationCount){
    for(let i=0; i<rotationCount; i++){
        array = rotateArrayLeftOnce(array)
    }
    return array
}

function rotateArrayLeftOnce(array){
    let temp;
    for(let i=array.length-1; i>=0; i--){
        if(i == array.length-1){
            temp = array[i]
            array[i] = array[0]
        }
        else{
            let temp1 = array[i]
            array[i] = temp
            temp = temp1
        }
    }
    return array
}

console.log(rotateArrayLeft([1,2,3,4],2))