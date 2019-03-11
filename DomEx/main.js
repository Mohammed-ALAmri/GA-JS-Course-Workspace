
document.querySelector("#btn").addEventListener("click", createTable)


function func(e){
    e.preventDefault()
    console.log("botato1")
    let color = document.querySelector("#col").value;
    let mes = document.querySelector("#mes").value;
    
    var stk = document.createElement("stk")
    stk.style.backgroundColor = color;
    var text = document.createTextNode(mes);
    console.log(text)
    stk.appendChild(text);
    let x = document.querySelector("#botato");
    x.appendChild(stk);
}
document.querySelector(".sticky").addEventListener("click", func)







//create table
function createTable(e){
   ///////////////////////////////////////////////////////////////////////
   e.preventDefault()
   /////////////////////////////////////////////////////////////////////
   //select table container
    var tbl = document.querySelector(".tbl")

    var row_val = document.querySelector("#row").value
    var col_val = document.querySelector("#col").value

    //create table element
    var table = document.createElement("table")
    var tbody = document.createElement("tbody")
    var th = document.createElement("th")
    var t = document.createTextNode("Your Table")
    th.appendChild(t)
    tbody.appendChild(th)





    for(var i = 1; i <= row_val; i++){
        var tr = document.createElement("tr")
        for(var j = 1; j <= col_val; j++){
            var td = document.createElement("td")
            td.setAttribute("onclick", "style.color='green'")
            var text = document.createTextNode(i+"."+j)
            td.appendChild(text)
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }
    
    table.appendChild(tbody)
    tbl.appendChild(table)
}
$("ul").on("click", "li", function(){
    $(this).hide("slow")    
})