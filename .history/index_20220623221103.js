// document.querySelector("button").addEventListener("click",handleClick); // passing a function to call.
// function handleClick(){
//   alert("I got Clicked!");
// }a troditonal way to call the function


// document.querySelector("button").addEventListener("click",function(){
//     alert("I got Clicked!");
// }); // a anonymous way to call a function

//click every button it will alert.
const numberOfDrumBottons = document.querySelectorAll(".drum");
for(let i = 0;i < numberOfDrumBottons.length;i++ ){
  numberOfDrumBottons[i].addEventListener("click",handleClick);
  function handleClick(){
    let buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      makeAnimation(buttonInnerHTML);
      buttonStop(buttonInnerHTML);
  }
}

// document.addEventListener("keydown",function(event){
//   makeSound(event.key);
// })// a anonymous way to call a function


document.addEventListener("keydown",checkPressed);
function checkPressed(e){
  makeSound(e.key);
  makeAnimation(e.key);
  buttonStop(e.key);
} // a traditional way to call the function

function makeAnimation(currentKey){
  let activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
}


function buttonStop(){
  let myTimeout = setTimeout(buttonUp, 5000);
  clearTimeout(myTimeout);
}

function makeSound(key){
  switch (key) {
    case "w":
      const drumSound5 = new Audio('sounds/crash.mp3');
      drumSound5.play();
      break;

    case "a":
      const drumSound1 = new Audio('sounds/kick-bass.mp3');
      drumSound1.play();
      break;

      case "s":
        const drumSound2 = new Audio('sounds/snare.mp3');
        drumSound2.play();
        break;

      case "d":
        const drumSound3 = new Audio('sounds/tom-4.mp3');
        drumSound3.play();
        break;

      case "j":
        const drumSound4 = new Audio('sounds/tom-3.mp3');
        drumSound4.play();
        break;

      case "k":
        const drumSound6 = new Audio('sounds/tom-2.mp3');
        drumSound6.play();
        break;

      case "l":
        const drumSound7 = new Audio('sounds/tom-1.mp3');
        drumSound7.play();
        break;

    default:
        console.log(key);

  }
}
