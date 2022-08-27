


function queriesResults(array, queries){

    queries = queries.sort((a, b)=>{
        return a[1] - b[1]
    })

    let currL = 0, currR = 0, currSum = 0

    // looping each query
    queries.map((val, indx, arr)=>{

        let L = val[0] , R = val[1]

        // increasing currR
        while (R >= currR){
            currSum += array[currR++]
        }

        // decreasing currL
        while(currL > L){
            currSum += array[currL--]
        }

        // increasing currL
        while(currL < L){
            currSum -= array[currL++]
        }

        console.log(`${L} - ${R} : `, currSum)
    })    

}


let arr = [1, 1, 2, 1, 3, 4, 5, 2, 8]
let Q = [[0, 4], [1, 3], [2, 4]]

queriesResults(arr, Q)