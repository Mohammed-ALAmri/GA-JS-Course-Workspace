



 document.querySelector(".sticky").addEventListener("click", function(e){
     
    e.preventDefault()
    console.log("botato1")
    let color = document.querySelector("#col").value;
    let mes = document.querySelector("#mes").value;
    
    var stk = document.createElement("stk")
    stk.style.backgroundColor = color;
    var text = document.createTextNode(mes);
    stk.appendChild(text);
    let x = document.querySelector("#botato");
    x.appendChild(stk);
    // alert("botato")
})