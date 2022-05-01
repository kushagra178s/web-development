var noofdrums = document.querySelectorAll(".drum").length;
 
// if want to do with mouse click
// for(var i=0; i<noofdrums; i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
//         var keypress = this.innerHTML;
//         switch(keypress){
//             case "w":
//                 var audio = new Audio("sounds/tom-1.mp3");
//                 audio.play();
//                 break;
//             case "a":
//                 var audio = new Audio("sounds/tom-2.mp3");
//                 audio.play();
//                 break;
//             case "s":
//                 var audio = new Audio("sounds/tom-3.mp3");
//                 audio.play();
//                 break;
//             case "d":
//                 var audio = new Audio("sounds/tom-4.mp3");
//                 audio.play();
//                 break;
//             case "j":
//                 var audio = new Audio("sounds/snare.mp3");
//                 audio.play();
//                 break;
//             case "k":
//                 var audio = new Audio("sounds/crash.mp3");
//                 audio.play();
//                 break;
//             case "l":
//                 var audio = new Audio("sounds/kick-bass.mp3");
//                 audio.play();
//                 break;
//             default:
//                 alert("wrong click");
//         }
//     });
// }

// if want to do with keyboard
document.addEventListener("keypress", function(event){
    makesound(event.key);
});

function makesound(event){
    switch(event){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            alert("wrong click");
    }
}
