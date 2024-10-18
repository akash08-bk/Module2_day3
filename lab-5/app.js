function validateForm(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username !==""&&password!==""){
        if(username=="admin"&&password=="admin@123"){
            alert("you are super admin")
        }
        if(username.length>=5&&password.length>=8){
            alert("login successful")
            
        }else{
            alert("username should be atleast 5 characters and password should be 8 charachters")

        }
    }else{
        alert("Please enter both username and password")
    }
    }


