

/*
1. arr = [34,22,5,21,36,24,65]

2. function MS(){
    2.1> split arr into 2 halfs -> a1, a2
    2.2> sorted1 = MS(a1)
    2.3> sorted2 = MS(a2)

    2.4> return merge(a1,a2)

}

3. function merge(a1, a2){
    - array = []
    - i, j, k = 0

    while ((i < a1.length) and (j < a2.lenght) ){
        if(a1[i] >= a2[j]){
            array[k++] = a1[i++]
        }
        else if(a1[i] < a2[j]){
            array[k++] = a2[j++]
        }
    }

    while(i < a1.length){
        array[k++] = a1[i++]
    }
    while(j < a2.lenght){
        array[k++] = a2[j++]
    }

}


*/


function mergeSortAccending(array){

    let mid = parseInt(array.length / 2)

    if (mid < 1){
        return array
    }

    let sorted1 = mergeSortAccending(array.slice(0, mid))
    let sorted2 = mergeSortAccending(array.slice(mid, array.length))

    return merge(sorted1, sorted2)

}


function merge(array1, array2){

    if(array1.length == 1 && array2.length == 1){
        return array1[0] > array2[0] ? [ array1[0], array2[0]] : [array2[0], array1[0]]
    }

    let a1 = 0, a2 =0, k = 0 
    let newArr = []

    while((array1.length > a1) && (array2.length > a2)){
        if(array1[a1] >= array2[a2]){
            newArr[k++] = array1[a1++]
        }
        else{
            newArr[k++] = array2[a2++]
        }
    }
    
    while(a1 < array1.length){
        newArr[k++] = array1[a1++]
    }
    while(a2 < array2.length){
        newArr[k++] = array2[a2++]
    }

    return newArr
}

console.log(mergeSortAccending([2,3,1,5,6,3,7,2]))