 function addTwo(a,b){
      return a+b;
    }

function total(userName){
      let val1 = Number(prompt("What is your first value"));
      let val2 = Number(prompt("What is your second value?"));
      alert("hello " + userName + " the total is "+ addTwo(val1, val2));
    }


function printName(){
  let first_name =document.getElementById("firstName").value;
  let last_name = document.getElementById("lastName").value;
  // console.log("Test message");
    alert("Hello " + first_name + " " + last_name);
}
