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
