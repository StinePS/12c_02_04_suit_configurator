"use strict";

window.addEventListener("DOMContentLoaded", getData);

let selectedColor;
const colorSwatches = document.querySelectorAll(".color-swatches");

async function getData() {
  console.log("getData");
  let response = await fetch("images/suit-01.svg");
  let svgData = await response.text();
  document.querySelector("#product-preview").innerHTML = svgData;
  init();
}

function init() {
  // Register clicks
  document.querySelectorAll(".attribute").forEach((attribute) => attribute.addEventListener("click", displayFlyout));

  const radioFeatures = document.querySelectorAll(".radio-flyout");
  radioFeatures.forEach((radioFeature) => {
    if (radioFeature.checked) {
      toggleFeature(radioFeature.name, radioFeature.value);
    }
    radioFeature.addEventListener("change", clickedFeatureButton);
  });

  const radioColors = document.querySelectorAll(".color input");
  radioColors.forEach((radioColor) => {
    if (radioColor.checked) {
      chooseColor(radioColor.name, radioColor.value);
    }
    radioColor.addEventListener("change", clickedColorButton);
  });
}

function displayFlyout(event) {
  // Show the flyout belonging to the clicked attribute
  let target = event.currentTarget;
  let feature = target.dataset.feature;
  console.log("displayFlyout", target.dataset.feature);
  let currentFlyout = document.querySelector(`#flyout-menu [data-feature=${feature}]`);
  let oldFlyout = document.querySelector("#flyout-menu .flyout-panel-display");

  // Add class/transition to the clicked attribute and remove same from the former flyout
  currentFlyout.classList.add("flyout-panel-display");
  if (oldFlyout) oldFlyout.classList.remove("flyout-panel-display");

  // Display "ants" to mark clicked attribute
  let currentFeature = document.querySelector(`#${feature}`);
  let oldFeature = document.querySelector(`.feature-chosen`);

  if (currentFeature) currentFeature.classList.add("feature-chosen");
  if (oldFeature) oldFeature.classList.remove("feature-chosen");
}

function clickedFeatureButton(event) {
  console.log("clickedFeatureButton");
  const selectedFeatureRadio = event.currentTarget;
  toggleFeature(selectedFeatureRadio.name, selectedFeatureRadio.value);
}

function toggleFeature(name, value) {
  console.log("toggleFeature", name, value);
  switch (name) {
    case "radio-tie":
      toggleTie(value);
      break;
    case "radio-bowtie":
      toggleBowtie(value);
      break;
    case "radio-pocketsquare":
      togglePocketsquare(value);
      break;
    case "radio-pockets":
      togglePockets(value);
      break;
    case "radio-buttons":
      toggleButtons(value);
      break;
  }
}

function toggleTie(value) {
  let tieImg = document.getElementById("suit_tie");
  let tieColor = document.getElementById("tie");
  let radioButtons = document.querySelector(".tie-swatches");
  if (value === "tie-true") {
    // Show img, coloured path and radio buttons
    tieImg.style.display = "block";
    tieColor.style.display = "block";
    radioButtons.style.display = "flex";
    // Hide bowtie img,
    document.querySelector(`input[id="bowtie-false"]`).checked = true;
    document.getElementById("suit_bowtie").style.display = "none";
    document.getElementById("bowtie").style.display = "none";
    document.querySelector(".bowtie-swatches").style.display = "none";
  } else {
    // Hide img, coloured path and radio buttons
    tieImg.style.display = "none";
    tieColor.style.display = "none";
    radioButtons.style.display = "none";
  }
}

function toggleBowtie(value) {
  let bowtieImg = document.getElementById("suit_bowtie");
  let bowtieColor = document.getElementById("bowtie");
  let radioButtons = document.querySelector(".bowtie-swatches");
  if (value === "bowtie-true") {
    // Show img, coloured path and radio buttons
    bowtieImg.style.display = "block";
    bowtieColor.style.display = "block";
    radioButtons.style.display = "flex";
    // Hide tie
    document.querySelector(`input[id="tie-false"]`).checked = true;
    document.getElementById("suit_tie").style.display = "none";
    document.getElementById("tie").style.display = "none";
    document.querySelector(".tie-swatches").style.display = "none";
  } else {
    // Hide img, coloured path and radio buttons
    bowtieImg.style.display = "none";
    bowtieColor.style.display = "none";
    radioButtons.style.display = "none";
  }
}

function togglePocketsquare(value) {
  let pocImg = document.getElementById("suit_pocketsquare");
  let pocColor = document.getElementById("pocketsquare");
  let radioButtons = document.querySelector(".pocketsquare-swatches");
  if (value === "pocketsquare-true") {
    // Show img, coloured path and radio buttons
    pocImg.style.display = "block";
    pocColor.style.display = "block";
    radioButtons.style.display = "flex";
  } else {
    // Hide img, coloured path and radio buttons
    pocImg.style.display = "none";
    pocColor.style.display = "none";
    radioButtons.style.display = "none";
  }
}

function togglePockets(value) {
  let x = document.getElementById("suit_pockets");
  if (value === "pockets-true") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleButtons(value) {
  let x = document.getElementById("suit_buttons");
  if (value === "buttons-true") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function clickedColorButton(event) {
  console.log("clickedColorButton");
  const selectedColorRadio = event.currentTarget;
  chooseColor(selectedColorRadio.name, selectedColorRadio.value);
}

function chooseColor(name, value) {
  console.log("chooseColor", name, value);
  const element = document.querySelector(`#${name.split("-")[0]} path`);
  element.className.baseVal = value;
}
