//Formvalidering
const besked = document.querySelector("#besked");

const validate = (f) => {

    //placering af @ i emailadressen
    const atpos = f.target.email.value.indexOf("@");//vi undersøger hvilken nr @ har i placeringen
    //console.log(atpos);

    //placering af det sidste punktum i emailadressen
    const dotpos = f.target.email.value.lastIndexOf(".");
    //console.log(dotpos);

    //hvis feltet med navn er tom så vises en fejl og formularen sendes ikke
    if(f.target.name.value === "") {
        besked.textContent = "You forgot to write your name";
        event.preventDefault();
        f.target.name.focus();
        return false;

    } else if(f.target.email.value === "") {
        besked.textContent = "You forgot to write your Email adress ";
        event.preventDefault();
        f.target.name.focus();
        return false;

    } else if(f.target.usrform.value === "") {
        besked.textContent = "You forgot to write a message";
        event.preventDefault();
        f.target.usrform.focus();
        return false;

    //undersøger placeringen af @(så det ikke kommer først, men at der står noget foran)
    } else if(atpos <= 0) {
        besked.textContent = "Your Email adress isn't valid";
        event.preventDefault();
        f.target.email.focus();
        return false;

    //her undersøger jeg om der er et tegn mellem @ og det sidste punktum
    } else if(dotpos < atpos + 2) {
        besked.textContent = "That's not a valid Email adress";
        event.preventDefault();
        f.target.email.focus();
        return false;

    //her undersøger jeg om der er mindre en to tegn efter det sidste punktum
    } else if(f.target.email.value.length <= dotpos + 2) {
        besked.textContent = "That's not a valid Email adress";
        event.preventDefault();
        f.target.email.focus();
        return false;
    }
    return true;
};

//jeg kalder funktionen der validerer ved klik på "Send"-knappen...
const form = document.querySelector("form");
form.addEventListener("submit", validate);
