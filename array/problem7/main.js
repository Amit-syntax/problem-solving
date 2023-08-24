function segregate(array){
    
    let newArr = []

    // push even elements in newArr
    for(let i=0; i< array.length; i++){
        if(array[i] % 2 == 0){
            newArr.push(array[i])
        }
    }
    // push odd elements in newArr
    for(let i=0; i< array.length; i++){
        if(array[i] % 2 != 0){
            newArr.push(array[i])
        }
    }

    return newArr
}

console.log(segregate([1,2,3,4,5]))