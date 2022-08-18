var buttonArray = [];
var audio;

buttonArray = document.querySelectorAll("button"); //copy all button in an array

for(var i = 0; i <buttonArray.length; i++)
{
  buttonArray[i].addEventListener("click",handleClicks); //add alerts to all button
}

// Event to perform on click
function handleClicks()
{
  var buttonInnerHtml = this.innerHTML; //stores the text in each button while clicks

  makeSound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);
}

// Event to perform on keypress
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})

// function to make sound only on specified keys
function makeSound(key)
{
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default: console.log(key);

  }
}

// Adding a new class to give animation when it is pressed
function buttonAnimation(currentKey)
{
  var currentButton = document.querySelector("."+currentKey);
  currentButton.classList.add("pressed");

  setTimeout(function(){
    currentButton.classList.remove("pressed");
  },100);
}
