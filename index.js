
for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
    var count = i;
    document.querySelectorAll("button")[count].addEventListener("click", handleClick);
}

function handleClick() {

    var event1 = this.innerHTML;
    keyClick(event1);
    animation(event1);
}

document.addEventListener("keydown", function(event) {
    keyClick(event.key);
    animation(event.key);
});


function keyClick(key){

    switch (key) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;
        
        case "a":
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
        break;

        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break;
        
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;

        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;
        
        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;

        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;

        default:console.log(this);
            break;
    }
   
}

function animation(current){
   var activebutton = document.querySelector("." + current);
   activebutton.classList.add("pressed");

   setTimeout(function(){
    activebutton.classList.remove("pressed")
   }, 100);
}
