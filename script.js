function red(){
    document.getElementsByClassName('red colorred')[0].style.backgroundColor = "red";
    document.getElementsByClassName('red coloryellow')[0].style.backgroundColor = "rgb(233, 233, 195)";
    document.getElementsByClassName('red colorgreen')[0].style.backgroundColor = "rgb(198, 237, 198)";
}
function yellow(){
    document.getElementsByClassName('red coloryellow')[0].style.backgroundColor = "yellow";
    document.getElementsByClassName('red colorgreen')[0].style.backgroundColor = "rgb(198, 237, 198)";
    document.getElementsByClassName('red colorred')[0].style.backgroundColor = "rgb(240, 193, 193)";
}
function green(){
    document.getElementsByClassName('red colorgreen')[0].style.backgroundColor = "green";
    document.getElementsByClassName('red colorred')[0].style.backgroundColor = "rgb(240, 193, 193)";
    document.getElementsByClassName('red coloryellow')[0].style.backgroundColor = "rgb(233, 233, 195)";
}
function off(){
    document.getElementsByClassName('red colorgreen')[0].style.backgroundColor = "rgb(198, 237, 198)";
    document.getElementsByClassName('red colorred')[0].style.backgroundColor = "rgb(240, 193, 193)";
    document.getElementsByClassName('red coloryellow')[0].style.backgroundColor = "rgb(233, 233, 195)";
}