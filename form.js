let email=document.getElementById("email");
let error=document.getElementById("error");
var num=document.getElementById("number");
var str=document.getElementById("pass");

function validate(){
        let regexp= /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/ ;
       // let num = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      

        if (regexp.test(email.value)){
            error.innerHTML="Valid";
            error.style.color="green";
            return true;
        }
        else{
            error.innerHTML="Invalid";
            error.style.color="red";
            alert("message");
            return false;
        }

    //     else if(num.test(num.value)){
    //         return true;
    //     }
        //  else
        // {
        //      return false;
        // }

}

function phonenumber()
{
  var num = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(num.test(number.value))
     {
	   return true;      
	 }
   else
     {
	   alert("Not a valid Phone Number");
	   return false;
     }
}

chkpwd= function (validatee) {
  var str = document.getElementById("pass").value;

  if (str.length < 8) {
    document.getElementById("demo").innerHTML = "Password length must be 8 char";
    document.getElementById("demo").style.color = "Red";
    return false;
  }
  else if (str.search(/[0-9]/) == -1) {
    document.getElementById("demo").innerHTML = "Atleast 1 numeric value must be there";
    document.getElementById("demo").style.color = "Red";
    return false;
  }
  else if (str.search(/[a-z]/) == -1) {
    document.getElementById("demo").innerHTML = "Atleast 1 small letter must be entered";
    document.getElementById("demo").style.color = "Red";
    return false;
  }
  else if (str.search(/[A-Z]/) == -1) {
    document.getElementById("demo").innerHTML = "Atleast 1 uppercase letter must be entered";
    document.getElementById("demo").style.color="Red";
    return false;
  }
  else if (str.search(/[!\@\#\$\%\^\&\(\)\-\+\.\,\;\:]/) == -1) {
    document.getElementById("demo").innerHTML = "Atleast 1 special letter must be entered";
    document.getElementById("demo").style.color = "Red";
    return false;
  }
  document.getElementById("demo").innerHTML = "Successful";
  document.getElementById("demo").style.color = "Green";
  return true;
}
  
  

