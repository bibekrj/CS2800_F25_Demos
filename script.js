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
  if( lastName == "joshi"){
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
  heading.style.fontStyle="italic ";

}

function saveData(){
  let name = document.getElementById("userName").value;
  localStorage.setItem("user", name);
  alert("saved");
}

document.getElementById("showBtn").onclick = function(){
  let savedValue = localStorage.getItem("user");
  if(savedValue == null){
    savedValue = "No name saved";
  }
  document.getElementById("display").textContent=savedValue;
  
}

document.getElementById("saveData").onclick = function(){
  let name = document.getElementById("name").value;
  let color = document.getElementById("color").value;
  let quantity = document.getElementById("quantity").value;
  
  let product_Data = {
    product_name:name,
    product_color:color,
    product_quantity:quantity,
    product_manufacture_date: document.getElementById("manufactureDate").value
  }
  localStorage.setItem("product_Data", JSON.stringify(product_Data));
  alert("data stored");
}


document.getElementById("showData").onclick = function(){
  let product_Data = JSON.parse(localStorage.getItem("product_Data"));
  console.log(product_Data.product_name);
  document.getElementById("product_name").innerHTML=product_Data.product_name;
  document.getElementById("product_color").innerHTML=product_Data.product_color;
  document.getElementById("product_quantity").innerHTML=product_Data.product_quantity;
  document.getElementById("product_manufacture_date").innerHTML=product_Data.product_manufacture_date;
}


document.getElementById("saveMultipleData").onclick = function(){
  let multiple_product_data = [
    { product_name:"Pen",
    product_color:"Brown",
    product_quantity:"10",
    product_manufacture_date: "2000"},
    { product_name:"Pencil",
    product_color:"Gray",
    product_quantity:"10",
    product_manufacture_date: "2000"},
    { product_name:"Eraser",
    product_color:"White",
    product_quantity:"10",
    product_manufacture_date: "2000"}
  ];
  localStorage.setItem("multiple_product_date", JSON.stringify(multiple_product_data));
}