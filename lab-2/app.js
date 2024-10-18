function welcomeMsg(){
    let userName=prompt("Enter your name")
    console.log(`Enter your name ${userName}`);
    let confirmation=confirm(`is your name ${userName} ?`)
    if(confirmation == true){
        alert("welcome")
    }else{
        alert("not permitted")
    }
    }
    welcomeMsg()
    //for and while loop we use let variable
    //because it is specific to a block
    // and in general we use var varible

/*function addNum(){
    let numOne=Number(prompt("enter numone"))
    let numTwo=Number(prompt("enter numtwo"))
    let result=numOne+numTwo
    alert(`the sume of ${numOne} and ${numTwo}is ${result}`)
    
    
}
addNum()*/