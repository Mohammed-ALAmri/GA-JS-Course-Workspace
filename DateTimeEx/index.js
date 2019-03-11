/*
    Current Date 
    Write a function that displays the current date and time in this format(Wednesday 06 Feb 2019, 06:00:00 PM)
    Suggestions
  Use JS built-in Date class
    Date - 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

//write your function here
    
        var date = new Date; 
        var day= ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
        var mon= ["jan", "Feb",];
        var d = date.getDay();
        var m = date.getMonth();
        var y = date.getFullYear();
        var h = date.getHours();
        var min = date.getMinutes();
        var s = date.getSeconds();
        var t = "Am";

        if(h > 12){
            t = "Pm";
        }
        if(h > 12){
            h -= 12;
        }
        if(h < 10){
            h = "0" + h;
        }
        if(min < 10){
            min = "0" + min;
        }
        if(s < 10){
            s = "0" + s;
        }
        m = mon[m];
        d = day[d];

        console.log(y + ":" + m + ":" + d + ":"+ h +":"+ min +":"+ s +":"+ t);


/*
    Time converter
    Write a program that, takes a number in seconds and converts it into time in Hours and mins
    Suggestions
    Use JS built-in Date class
    Date - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
   
*/

//write your function here

/*
Anagram Detector
Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.
In other words, given: "listen" and ["enlists" "google" "inlets" "banana" "istlen"] the program should return inlets and istlen.
Suggestions
Use JS built-in functions to your advantage
split() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
sort()- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/sort
join()- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/join
*/

//write your function here