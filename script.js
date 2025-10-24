 function addTwo(a,b){
      return a+b;
    }

function total(userName){
      let val1 = Number(prompt("What is your first value"));
      let val2 = Number(prompt("What is your second value?"));
      alert("hello " + userName + " the total is "+ addTwo(val1, val2));
    }


function printName(){
  // let first_name =document.getElementById("firstName").value;
  // let last_name = document.getElementById("lastName").value;
  // // console.log("Test message");
  //   alert("Hello " + first_name + " " + last_name);
  let firstName = document.forms["contactForm"]["firstName"].value;
  let lastName = document.forms["contactForm"]["lastName"].value;
  if( lastName == ""){
    alert("Hey You for to enter the last name");
  }
  else{
    alert("Hello " + firstName + " " + lastName);
  }

}

function timeStamp(){
   const today_date = new Date();
    // console.log(today_date);
      const month = Number(today_date.getMonth())+1;
    let message = "Your order was placed on "+today_date.getFullYear()+"-"+month+"-"+today_date.getDate();
    document.getElementById("finalMessage").innerHTML = message;
}

function changeColor(change){
  // let change = true;
  let heading = document.getElementById("colorChangeH1");
  heading.style.color="red";

}
