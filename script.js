"use strict";

window.addEventListener("DOMContentLoaded", getData);

// Features that can be modified "physically" (not just change color)
const features = {
  fabric: false,
  lapel: false,
  tie: true,
  bowtie: false,
  pocketsquare: true,
  pocketflaps: false,
  buttons: false,
};

async function getData() {
  console.log("getData");
  let response = await fetch("images/suit-01.svg");
  let svgData = await response.text();
  document.querySelector("#product-preview").innerHTML = svgData;
  init();
}

function init() {
  // Register clicks
  // document.querySelectorAll(".color_btn").forEach((btn) => btn.addEventListener("click", getColor));
  document.querySelectorAll(".attribute").forEach((attribute) => attribute.addEventListener("click", displayFlyout));
}

function displayFlyout(event) {
  let target = event.currentTarget;
  let feature = target.dataset.feature;
  console.log("displayFlyout", target.dataset.feature);
  let currentFlyout = document.querySelector(`#flyout-menu [data-feature=${feature}]`);
  let oldFlyout = document.querySelector("#flyout-menu .flyout-panel-display");

  currentFlyout.classList.add("flyout-panel-display");
  oldFlyout.classList.remove("flyout-panel-display");
  displayDashes();

  function displayDashes() {
    console.log("displayDashes");
    let currentFeature = document.querySelector(`#product-preview [data-feature=${feature}]`);
    let oldFeature = document.querySelector("#product-preview .feature-chosen");

    currentFeature.classList.add("feature-chosen");
    oldFeature.classList.remove("feature-chosen");
  }
}

function togglePockets() {
  let x = document.getElementById("suit_pockets");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function toggleButton() {
  let x = document.getElementById("suit_buttons");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function toggleLapel() {
  let x = document.getElementById("suit_lapel");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function togglePocketsquare() {
  let x = document.getElementById("suit_pocketsquare");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function toggleTie() {
  let x = document.getElementById("suit_tie");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function toggleBowtie() {
  let x = document.getElementById("suit_bowtie");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
