const burger = document.querySelector("#burger");
const mask = document.querySelector("#lightbox_mask");//laver en variabel, hvor jeg får fat på masken

burger.addEventListener("click", open);
mask.addEventListener("click", hide);//her sætter jeg en EventListener for at fortælle masken at den skal sjules, når vi klikker på den

function open() {
    mask.style.display = "grid";
}

function hide() {
    mask.style.display = "none";//masken skal ikke vises,når funktionen hide()bliver kaldt
}
hide();