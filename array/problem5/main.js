/*
- for idx in arr:
    - check odd idx
        - check if less than next element:
            - replace next with current
    - check even idx
        - check if current is greater
            - replace current with next 
*/

function rearrange(arr){
    for(let i=0; i<arr.length-1; i++){
        if(i%2 != 0 && (arr[i] < arr[i+1])){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
        else if(i%2 == 0 && (arr[i] > arr[i+1])){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
    }
    return arr
}

console.log(rearrange([6, 4, 2, 1, 8, 3]))