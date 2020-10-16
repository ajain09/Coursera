//calculate total amount of bill

function calculate(){
    var pizza=document.getElementById("qty1").value*200;
    var ff=document.getElementById("qty2").value*50;
    var burger=document.getElementById("qty3").value*100;
    var total=pizza+ff+burger;
    document.getElementById("bill").innerHTML="Rs. "+total;
}

//form validation

function validateForm(){
    var pass = document.getElementById("pass").value;
    var a=pass.length;
    if(a<=7){
        alert("Password must be more than 8 characters long");
        return false;
    }
    else{
        alert("Thankyou for the feedback!");
        return true;
    }
}
