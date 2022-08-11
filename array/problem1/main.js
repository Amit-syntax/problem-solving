/*
Q. Program for array rotation !
*/

/*
// method1
---------------
Using temp array
*/

function reverse(array){
    
    for(let i=0; i<array.length/2; i++){
        if(i != (array.length-(i+1))){
            
            let temp1 = array[i]
            array[i] = array[array.length-(i+1)]
            array[array.length-(i+1)] = temp1
        }
    }
    return array
}


function rotateRight(array, byPositionCount){
    let rotableValues = array.slice(array.length - byPositionCount)
    let shiftableValues = array.slice(0, array.length - byPositionCount)

    return [...rotableValues, ...shiftableValues]
}

console.log(rotateRight([1,2,3,4,5,6], 3))