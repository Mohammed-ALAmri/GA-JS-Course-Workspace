
function equals(word){
    var arr = ["jafar", "jarfa", "al", "ali"];
    var word = "jafar";
    var earr = [];
    var flag = true;
    word = word.split("").sort();
    console.log(word);
    for(let i=0 ; i<arr.length ; i++){
        temp = arr[i].split("").sort();
        for(let j=0 ; j<temp.length ; j++){
            if(word[j] != temp[j]){
                flag = false;
                break;
            }
        }
        if(flag == true){
            earr.push(arr[i]);
        }
    }
    console.log(earr);
}