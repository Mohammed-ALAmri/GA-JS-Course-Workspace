
## Factorials
Write function that returns the factorial of a number.
```
if n = 5
then
factorial(n) is 5 * 4 * 3 * 2 * 1
```

>The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!


## Letter Counting

Write a function that takes a string and prints out how many times a character occurs in the string. For example, `letterCount("apple")` should print the following:
```
 a - 1
 p - 2
 l - 1
 e - 1
```

> Hint: Somewhere, you will need to examine each letter in the string, and increase the value of a counter depending on the letter you're currently examining. An object with keys corresponding to the letters of the string would be useful.


## Unique Array
Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements that belong to exactly one array. For example, difference `([1, 2, 3], [2, 3, 4])` should return [1, 4].


## Unique Array
Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements common to both arrays. For example, intersection`([1, 2, 3], [2, 3, 4])` should return `[2,3]`.

###  challenge part 2: 

Handle the situation where the elements may not be unique, i.e. intersection([1, 2, 2, 2, 3], [2, 2, 3, 4]) should then return [2, 2, 3].

### challenge 3: 
Handle the situation where the elements may not be unique, i.e. difference([1, 2, 2, 3], [2, 2, 2, 3, 4]) should return [1, 2, 4].

