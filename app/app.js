// declaring variables...
let ratingCard = document.querySelector("#ratingContainer");
let thanksCard = document.querySelector("#thankyouContainer");
const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", () => submit());

function submit(){
    console.log("clicked")
    ratingCard.classList.remove("is--visible");
    ratingCard.classList.add("is--hidden");

    thanksCard.classList.remove("is--hidden");
    thanksCard.classList.add("is--visible");
}