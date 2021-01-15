var item1;
var item2;
var item3;
var item4;
var item5;
var item6;

function newList() {
    item1 = prompt("enter first thing");
    item2 = prompt("enter second thing");
    item3 = prompt("enter third thing");
    item4 = prompt("ebter forth thing");
    item5 = prompt("enter fifth thing");
    item6 = prompt("enter sixth thing");
    updateList();
}

function updateList() {
    document.getElementById("o").innerHTML = item1;
    document.getElementById("d").innerHTML = item2;
    document.getElementById("g").innerHTML = item3;
    document.getElementById("d").innerHTML = item4;
    document.getElementById("s").innerHTML = item5;
    document.getElementById("b").innerHTML = item6;
}