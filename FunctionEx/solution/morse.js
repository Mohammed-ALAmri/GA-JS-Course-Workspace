var morse = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    v: '...-',
    x: '-..-',
    y: '-.--',
    z: '--..'
  }
/*
  Solution Array(Pseudo code)
  ==============
  1. Split string to make array of characters
  2. Loop through array of characters
  3. find key in objects and swap with key value
  4. save each value in a string
  5. return string
*/

//array solution
function encodeStringAsArray(word){
    let str_split = word.split("") //split string into array of characters
    let code = ""

    str_split.forEach(function(el){ //loop through array
        if(el == " "){ //if empty string print space
            code += " "
        }else{
            code += morse[el] + " " //else print encoded and space
        }
    });

    return code
}
console.log(encodeStringAsArray("hello world"))

/*
  Solution String(Pseudo code)
  ==============
  1. Make Loop based on string length
  2. Check if character matches object key
  3. save each value in a string
  4. return string
*/
let encodeStringAsString = function(word){
    let code = "" //string method
    for(let x = 0; x < word.length; x++){
        if(word.charAt(x) == " "){ //charAt(x) returns the character at that position
            code += " "
        }else{
            code += morse[word.charAt(x)] + " "
        }
    }
    return code
}

console.log(encodeStringAsString("hello world"))


let decodeAsString = function(word){
    let morse_array = word.split(' ')//convert encoded to array
    let dicpher = "" 
    let result = ""

    for(let x = 0; x < morse_array.length; x++){
        //Object.keys(morse) -- this method stores all the keys
        // in an array of strings
        
        //The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

        dicpher = Object.keys(morse).find(function(key){ 
            return morse[key] == morse_array[x] //check if value of object matches morse_array
        })

        if(dicpher != undefined){ //if undefined print " " else print result + dicpher
            result += dicpher 
        }else{
             result +=" "
        }
    }

    return result
    
}

console.log(decodeAsString("... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. ."))

console.log(decodeAsString("-.-- --- ..- .-.    .. -. ... - .-. ..- -.-. - --- .-. ...    .-.. --- ...- .    -.-- --- ..-"))

console.log(decodeAsString("- .... .. ...    .. ...    - .... .    .- -. ... .-- . .-.    - ---    - .... .    ..- .-.. - .. -- .- - .    --.- ..- . ... - .. --- -.    --- ..-.    .-.. .. ..-. .    - .... .    ..- -. .. ...- . .-. ... .    .- -. -..    . ...- . .-. -.-- - .... .. -. --. ..."))






