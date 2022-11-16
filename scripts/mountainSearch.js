import { mountainsArray } from "./mountainData.js";

const sMountainEl = document.getElementById("sMountain");
console.log(sMountainEl);

for (let i = 0; i < mountainsArray.length; i++) {
  const element = mountainsArray[i].name;
  let theOption = new Option(element);
  console.log(theOption);
  sMountainEl.appendChild(theOption);
}
