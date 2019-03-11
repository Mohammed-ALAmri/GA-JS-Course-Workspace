function oddNumbers(l, r) {
  var arr = [];
  for(let i = l ; i <= r ; i++){
    if (i % 2 != 0){
      arr.push(i);
    }
  }
  return arr
}

console.log(oddNumbers(3,9));
 // [3,5,7,9]
console.log(oddNumbers(1,7));
// [1,3,5,7]


function findNumber(arr, k) {
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] === k){
      return "YES"
    }
  }
  return "NO"
}

console.log(findNumber([5,1,2,3,4,5,1], 3));
 //YES
 console.log(findNumber([1,1,2], 5))
 //NO
 console.log(findNumber([5,1,2,3,4,5,1], 5)) 
 //YES


function dateFormat(date){
//takes date as DD/MM/YYYY
  date = date.split("/")
  if(date[0].length == 1){
    date[0] = "0" + date[0]
  }
  if(date[1].length == 1){
    date[1] = "0" + date[1]
  }
  var formattedDate = date[2] + date[0] + date[1]
    return formattedDate  //YYYYDDMM
}

console.log(dateFormat("25/02/1998")) //19982502
console.log(dateFormat("25/5/2019")) //20192505
console.log(dateFormat("5/2/1990")) //19900502