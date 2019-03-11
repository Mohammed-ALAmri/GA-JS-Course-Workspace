$(document).ready(function(){

    $.post("https://tshd1111.herokuapp.com/api",
    {
        firstname: "Mohammed",
        lastname: "Alamri",
        email: "Mohammed.FA@gmail.com"
    }, function(data){// to ensure successful post
        console.log(data);
    })


    $.get("https://tshd1111.herokuapp.com/api", function(res){
        res.forEach(function(el){
            $('#list').append(`<li> ${el.firstname} - ${el.lastname} - ${el.email} </li>`)
        })
    })
})