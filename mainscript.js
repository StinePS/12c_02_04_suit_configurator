"use strict";

window.addEventListener("DOMContentLoaded", getData);

// The model of all features
const features = {
  fabric: false,
  lapel: false,
  pocketsquare: true,
  pocketflaps: false,
  buttons: false,
};

async function getData() {
  console.log("getData");
  let response = await fetch("suit1.svg");
  let svgData = await response.text();
  document.querySelector("#product-preview").innerHTML = svgData;
  init();
}

function init() {
  // Register clicks
  document.querySelectorAll(".attribute").forEach((attribute) => attribute.addEventListener("click", displayFlyout));
}

function displayFlyout(event) {
  const target = event.currentTarget;
  const feature = target.dataset.feature;
  console.log("displayFlyout", target.dataset.feature);
  document.querySelector(".flyout-panel").classList.remove("flyout-panel-display");
  document.querySelector(`#flyout-menu  [data-feature=${feature}]`).classList.add("flyout-panel-display");
  init();
}

function TogglePockets() {
  var x = document.getElementById("myPockets");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 
function ToggleButton() {
  var x = document.getElementById("myButton");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 
function ToggleLapel() {
  var x = document.getElementById("myLapel");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function ToggleHandkerchief() {
  var x = document.getElementById("myHandkerchief");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 
function ToggleTie() {
  var x = document.getElementById("myTie");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function ToggleBowtie() {
  var x = document.getElementById("myBowtie");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 