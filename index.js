// Button press code
let numBtn = document.querySelectorAll(".drum").length;
for(let i = 0; i < numBtn; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        makeAnimation(buttonInnerHTML);
    });
}


// keyboard button press code
document.addEventListener("keydown", function(event){
    makeSound(event.key.toLowerCase());
    makeAnimation(event.key);
});

// // Sound function
    function makeSound(key){
    switch(key){
        case("w"):
        case("ص"):
        let audiow = new Audio("./sounds/tom-1.mp3");
        audiow.play();
        break;
        case("a"):
        case("ش"):
        let audioa = new Audio("./sounds/tom-2.mp3");
        audioa.play();
        break;
        case("s"):
        case("س"):
        let audios = new Audio("./sounds/tom-3.mp3");
        audios.play();
        break;
        case("d"):
        case("ي"):
        let audiod = new Audio("./sounds/tom-4.mp3");
        audiod.play();
        break;
        case("j"):
        case("ت"):
        let audioj = new Audio("./sounds/snare.mp3");
        audioj.play();
        break;
        case("k"):
        case("ن"):
        let audiok = new Audio("./sounds/crash.mp3");
        audiok.play();
        break;
        case("l"):
        case("م"):
        let audiol = new Audio("./sounds/kick-bass.mp3");
        audiol.play();
        break;
        default:
        console.log(key);
    }
}

// Animation work function
function makeAnimation(botton){
    let activeButton = document.querySelector("." + botton);
    activeButton.classList.add("pressed")
    setTimeout (function(){
        activeButton.classList.remove("pressed")
    }, 100);
}

