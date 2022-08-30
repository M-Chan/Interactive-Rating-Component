// declaring variables...
let ratingCard = document.querySelector("#ratingContainer");
let thanksCard = document.querySelector("#thankyouContainer");
const submitButton = document.querySelector("#submitButton");
let ratingButtons = document.querySelectorAll(".ratingButton");
let rating = 0;
let submittedRating = document.getElementById("selectedRating");

submitButton.addEventListener("click", () => submit());

function submit(){
    if(rating !=0){
        // console.log("Submitted successfully")
        ratingCard.classList.remove("is--visible");
        ratingCard.classList.add("is--hidden");

        thanksCard.classList.remove("is--hidden");
        thanksCard.classList.add("is--visible");

        submittedRating.innerText = rating;
    }
    else{
        alert("Please select a rating");
    }
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