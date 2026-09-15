let age=document.getElementById("t1").value;

function checkage(){
    let age1=Number(age);
    if(age1<18){
      document.getElementById("display").innerHTML="Eligible";
    }
    else {
        document.getElementById("display").innerHTML="Not Eligible";
    }
    
};