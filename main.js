"use strict";

// select elements

const mainContainer = document.querySelector(".container");
const btnSub = document.querySelector(".btn");
const rating = document.querySelectorAll("li");

const thankContainer = document.querySelector("#hide__window");
const rateText = document.querySelector("#change__text");

// function

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener("click", function () {
    const numbers = rating[i].textContent;

    for (let i = 0; i < rating.length; i++) {
      rating[i].classList.remove("selected");
    }
    rating[i].classList.add("selected");
    
    // change text of thank

    rateText.textContent = `You selected ${numbers} out of 5`;
    btnSub.addEventListener("click", function () {
      mainContainer.classList.add("hidden");
      thankContainer.classList.remove("hidden");
    });
  });
}
