function add(){
    var inputs = document.querySelectorAll("input")
    var tr = document.createElement('tr')
    var tbody = document.querySelector('tbody')
    for(var i=0; i<inputs.length;i++){
        var td = document.createElement('td');
        td.innerHTML = inputs[i].value
        tr.appendChild(td)
    }
    tbody.appendChild(tr)
}