const florida = document.querySelector("#the_florida_project");
const floridaMask = document.querySelector("#gallery_lightbox_mask");//laver en variabel, hvor jeg får fat på masken
const floridaLightbox = document.querySelector("#gallery_lightbox")

let index = 0;

const fotoArray = ["florida_gallery_three", "florida_gallery_to", "florida_gallery_one"];
const textArray = ["Designing and coding a movie-page.", "The page was mostely designed with grids.", "You can donate money on the page for a good cause."];


const galleryPhoto = document.querySelector("#galleryPhoto");

const caption = document.querySelector(".img_text")

florida.addEventListener("click", open);//for at åbne masken 
floridaMask.addEventListener("click", hide);//her sætter jeg en EventListener for at fortælle masken at den skal sjules, når vi klikker på den


function open() {//her bliver masken+lightboxen vist
    floridaMask.style.display = "block";
    floridaLightbox.style.display = "grid";
}

function hide() {
    floridaMask.style.display = "none";//masken skal ikke vises, når funktionen hide()bliver kaldt
    floridaLightbox.style.display = "none";//...og heller ikke galleriet
}
hide();

function nextImage() { //her laver jeg en funktion, som gør at pilener kan skifte billederne(frem og starter forfra igen)
    if (index < fotoArray.length - 1) {
        index += 1;
    } else {
        index = 0;
    }
    change();
}

function previousImage() {//her laver jeg en funktion, som kører den anden vej(venstre)
    if (index > 0) {
        index -= 1;
    } else {
        index = fotoArray.length - 1;
    }
    change();
}

function change() {//her bliver funktionen lavet, som skifter billderene og texten
    // Change picture
    const imagePath = 'images/' + fotoArray[index] + '.png';
    galleryPhoto.setAttribute("src", imagePath);
    // Change text
    const text = textArray[index];
    caption.innerText = text;
}
document.querySelector("#left").addEventListener("click", previousImage);
document.querySelector("#right").addEventListener("click", nextImage);

