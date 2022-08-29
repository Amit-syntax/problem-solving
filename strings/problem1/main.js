
function medianCalc(number){
    return parseInt((number+1)/2)
}

function decodeMediaString(string){

    let decodedString = ""
    let remainingString = string

    while(!(decodedString.length >= string.length)){
        let median = medianCalc(remainingString.length)
        decodedString += remainingString[median-1]

        remainingString = remainingString.slice(0, median-1) + remainingString.slice(median)
    }
    return decodedString
}

console.log(decodeMediaString('save soil'))