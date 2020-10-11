
/*var button_w = document.querySelector("button.w"); choosing only the first button*/
/*button_w.addEventListener("click",handleClick)   using a function*/


/*function handleClick(){
  alert("Button got clicked.")
}    function that does something*/

var buttons = document.querySelectorAll("button.drum");

for (item of buttons){
  item.addEventListener("click", function (){
    var audio = new Audio("sounds/tom-1.mp3"); // audio added to buttons
    audio.play();
  })
}

/* other option using for loop

for (i = 0; i< button.length; i++){
  document.querySelectorAll("button.drum")[i].addEventListener("click", function(){
    alert("Button Clicked!");
  })
}  

function() {} .. is called an ANONYMUS FUNCTION, USED ONLY ONCE. It is similar to python's Lambda functions.*/