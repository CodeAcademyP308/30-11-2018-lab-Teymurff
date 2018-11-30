function Add(){
 var input = document.querySelector("input").value
var ul = document.querySelector("ul")
var li = document.createElement("li")
li.innerHTML = input
ul.appendChild(li)

}
