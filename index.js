
/*var button_w = document.querySelector("button.w"); choosing only the first button*/
/*button_w.addEventListener("click",handleClick)   using a function*/


/*function handleClick(){
  alert("Button got clicked.")
}    function that does something*/

var buttons = document.querySelectorAll("button.drum");

for (item of buttons){
  item.addEventListener("click", function (){

    var buttonInnerHtml = this.innerHTML;

    CheckButton(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

/* other option using for loop

for (i = 0; i< button.length; i++){
  document.querySelectorAll("button.drum")[i].addEventListener("click", function(){
    alert("Button Clicked!");
  })
}  

function() {} .. is called an ANONYMUS FUNCTION, USED ONLY ONCE. It is similar to python's Lambda functions.*/ 

document.addEventListener("keydown", function(event){  /* event listener is applied to the whole html document*/
  CheckButton(event.key);  /* WORKS!!!!*/
  buttonAnimation(event.key);

});


function CheckButton(button){

  switch (button) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3"); // audio added to buttons
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default: console.log(event.key);
      break; 
  }
}


function buttonAnimation(currentButton){
  var activeButton = document.querySelector("." + currentButton);
  //activeButton.setAttribute("class", ".pressed");
  activeButton.classList.add("pressed");  // no dots when class name is given!

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
  
}