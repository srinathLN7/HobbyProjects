



for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
      playDrumSound(this.textContent);
      buttonAnimation(this.textContent);
  });
}


document.addEventListener("keypress", function(){
   playDrumSound(event.key);
   buttonAnimation(event.key);
 } );

function playDrumSound(buttonText) {
  switch (buttonText) {
    case "w":
    new Audio("sounds/tom-1.mp3").play();
    break;
    case "a":
    new Audio("sounds/tom-2.mp3").play();
    break;
    case "s":
    new Audio("sounds/tom-3.mp3").play();
    break;
    case "d":
    new Audio("sounds/tom-4.mp3").play();
    break;
    case "j":
    new Audio("sounds/snare.mp3").play();
    break;
    case "k":
    new Audio("sounds/kick-bass.mp3").play();
    break;
    case "l":
    new Audio("sounds/crash.mp3").play();
    break;
    default: console.log("buttonText");
  }
}

function buttonAnimation(buttonKey) {
  document.querySelector("."+buttonKey).classList.add("pressed");
  setTimeout ( function () {
    document.querySelector("."+buttonKey).classList.remove("pressed");
  }, 100);
}
