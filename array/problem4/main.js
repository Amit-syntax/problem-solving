
function canBeSummed(array, X){

    if(X === 0 ){
        return true
    }
    if(array.length == 0){
        return false
    }

    for(let i=0; i<array.length; i++){
        if(array[i] <= X){
            X -= array[i]

            let sumSuccess = canBeSummed(array.slice(i+1), X)
            if(sumSuccess){
                return sumSuccess
            }
        }
    }
    return false

}

console.log(canBeSummed([1,2,3,4], 6))
console.log(canBeSummed([11,5,3,4, 1, 1], 11)) 