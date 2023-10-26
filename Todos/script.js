var input = document.getElementById("input");
var button = document.getElementById("button");
var ul = document.querySelector("ul"); 
button.addEventListener("click",function(){ 
    if (input.value.length>0) { 
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value=""

    }
})