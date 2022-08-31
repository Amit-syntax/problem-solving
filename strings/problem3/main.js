


function checkAnagram(string1, string2){

    let asciiValues1 = [], asciiValues2 = [];

    for(let ch = 0; ch < string1.length; ch++){
        asciiValues1.push(string1.charCodeAt(ch))
    }

    for(let ch = 0; ch < string2.length; ch++){
        asciiValues2.push(string2.charCodeAt(ch))
    }

    console.log(asciiValues1, asciiValues2)

    // comparing by sum of ascii values.
    return asciiValues1.reduce((pv, cv, ci)=> pv+cv) == asciiValues2.reduce((pv, cv, ci)=> pv+cv)

}


console.log(checkAnagram('listen', 'silent'))