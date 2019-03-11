$(function(){
    // $.get(url,func)
    // $.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8bcbd60b36410cb7d6c4f88c9eaad318",
    //     function(res){
    //         res.results.forEach(element => {
    //             $(".mo").append(`<li><img src= "https://image.tmdb.org/t/p/w500/${element.poster_path}"/></li>`)
    //         });
    //     })


    $.ajax({
        url:"https://api.themoviedb.org/3/discover/movie",
        type:"get",
        data: { api_key: "8bcbd60b36410cb7d6c4f88c9eaad318" },
        success: function(data){
            data.results.forEach(element => {
                $(".mov").append(
                `<div class="card">
                    <img class="img" src= "https://image.tmdb.org/t/p/w500/${element.poster_path}"/>
                    <div class="container">
                        <h4><b> ${element.title} </b></h4> 
                    </div>
                </div>
                <br>`);
            });
            hideimg();
        },
        error: function(xhr,status,err){

        }        
    })

    function hideimg(){
        $(".load").hide();
    }

    $(".search").keyup(function(){

        var value = $(".search").val();
        var url = `https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=8bcbd60b36410cb7d6c4f88c9eaad318&query=${value}`
    
        $.get(url, function(res){
            let list = "";
            res.results.forEach(element => {
                list += `<li>${element.title}</li>`;
            });
            $(".list").html(list);

        })
        $(".mov").hide();
    });
});