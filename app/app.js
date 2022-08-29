// declaring variables...
let ratingCard = document.querySelector("#ratingContainer");
let thanksCard = document.querySelector("#thankyouContainer");
const submitButton = document.querySelector("#submitButton");
let ratingButtons = document.querySelectorAll(".ratingButton");
let rating = 0;

submitButton.addEventListener("click", () => submit());

function submit(){
    // console.log("Submitted")
    ratingCard.classList.remove("is--visible");
    ratingCard.classList.add("is--hidden");

    thanksCard.classList.remove("is--hidden");
    thanksCard.classList.add("is--visible");
}

ratingButtons.forEach(mainRatingButton => {
    mainRatingButton.addEventListener('click', () => {
    //   console.log("Rating button clicked");
      ratingButtons.forEach(otherRatingButtons => {
        otherRatingButtons.classList.remove("ratingButton--active");
      })
      mainRatingButton.classList.add("ratingButton--active");
      rating = mainRatingButton.id;
    //   console.log("rating:", rating);
    })
})