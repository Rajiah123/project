// state players of the game (rabbit, turtle)

// state the speed of the game for each player.

// control manually each player speed by selecting and functioning each button.

// the state of eacch button either play or pause.



function myPlayFunction() {
    document.getElementById("rabit").style.animationPlayState = "running";
  }
  
  function myPauseFunction() {
    document.getElementById("rabit").style.animationPlayState = "paused";
  }
    
  

  function myPlayFunction() {
    document.getElementById("tertle").style.animationPlayState = "running";
  }
  
  function myPauseFunction() {
    document.getElementById("tertle").style.animationPlayState = "paused";
  }

// calculate per each our who is the winner.

// auto message is printed as per the below stated function.

  const animation = new Date().getHours(); 
  let greeting;
   let id=demo;

if (animation >="1250px") {
  greeting = "Turtle is winning";
} else {
  greeting = "Rabit is winning";
}

document.getElementById("demo").innerHTML = greeting;


