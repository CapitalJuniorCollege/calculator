var calculator = {
  result : null,
  operator: null,
  check_input: function(button){ // check if the input is valid and asign it
    var self = calculator;
    console.log("Check Input");
    var input = document.getElementById("input");  //user input
    var input_text = input.value;
    var errors = document.querySelector("#error");
    var input_number = Number(input_text); // create a number if possible
    if(Number.isNaN(input_number)){ // check if the input_number is NOT A NUMBER
      input.value = "";
    }
  },
  set_number: function(button){
    //asumimos que el boton esta correctamente recuperado en este punto
   return function(){
     var input = document.getElementById("input");  //user input
     input.value = ""+input.value+button.textContent;
   };//return
  },//set_number
  exec_operator: function(button){
    var self = calculator;
    return function(){
      if(self.result === null){
      }
      self.operator = button.textContent;

    };
  },
  clear: function(){
    var self = calculator;
    console.log(self);
    self.result = null;
    self.op2 = null;
    self.operator = null;
    var input = document.getElementById("input");  //user input
    input.value = "";
  },
};

document.addEventListener("DOMContentLoaded",function(event){
  //Una vez la página ha cargado.
  var output = document.getElementById("result");
  var controlpad = document.getElementById("controlpad");
  var button_operators =  controlpad.querySelectorAll("#operators button");
  var i;
  for(i=0 ; i<button_operators.length ; i++){
    button_operators[i].addEventListener("click",calculator.check_input);
  }
  var button_numbers = controlpad.querySelectorAll("#numbers button");
  var input = document.getElementById("input");  //user input
  for(i=0;i<button_numbers.length;i++){
    //console.log(button_numbers[i]);
    button_numbers[i].addEventListener(
      "click",
      calculator.set_number(button_numbers[i])
    );//addEventListener
  }
  var button_clear = controlpad.querySelector("#clear");
  button_clear.addEventListener("click",calculator.clear);
  console.log("Initiated");
});
