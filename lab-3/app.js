function addNumber(){
    var oneNumber = parseInt(document.getElementById('numOne').value)
    var twoNumber = parseInt(document.getElementById('numTwo').value)
    var addition= oneNumber+twoNumber
    var output=`Answer is ${addition}`
    document.getElementById(`result`).innerHTML=output
}
function subNumber(){
    var oneNumber = parseInt(document.getElementById('numOne').value)
    var twoNumber = parseInt(document.getElementById('numTwo').value)
    var subraction= oneNumber-twoNumber
    var output=`Answer is ${subraction}`
    document.getElementById(`result`).innerHTML=output
}
function mulNumber(){
    var oneNumber = parseInt(document.getElementById('numOne').value)
    var twoNumber = parseInt(document.getElementById('numTwo').value)
    var multiplication= oneNumber*twoNumber
    var output=`Answer is ${multiplication}`
    document.getElementById(`result`).innerHTML=output
}
function divNumber(){
    var oneNumber = parseInt(document.getElementById('numOne').value)
    var twoNumber = parseInt(document.getElementById('numTwo').value)
    var division= oneNumber/twoNumber
    var output=`Answer is ${division}`
    document.getElementById(`result`).innerHTML=output
}