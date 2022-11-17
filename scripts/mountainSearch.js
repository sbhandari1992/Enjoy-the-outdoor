import { mountainsArray } from "./mountainData.js";

const sMountainEl = document.getElementById("sMountain");
const outputDivEl = document.getElementById("outputDiv");
const outputimgDivEl = document.getElementById("outputImgDiv");
const outputFieldset = document.getElementById("outputFieldset");



for (let i = 0; i < mountainsArray.length; i++) {
  const element = mountainsArray[i].name;
  let theOption = new Option(element);
  sMountainEl.appendChild(theOption);
}


sMountainEl.onchange = displayItems;

function displayItems() {

  let sMountainElValue = sMountainEl.value;
  outputDivEl.innerHTML = '';
  outputimgDivEl.innerHTML = '';


  mountainsArray.forEach((av) => {


    if (sMountainElValue == av.name) {
      
      let imgEl = document.createElement("img");
      outputimgDivEl.appendChild(imgEl);
      let imgSrc = av.img;
      console.log(imgSrc);
      imgEl.src = `../images/${imgSrc}`
     

      let h4Name = document.createElement("h4");
      outputDivEl.appendChild(h4Name);
      h4Name.innerText = `Mountain Name:   ${av.name}`;

      let h4Desc = document.createElement("h4");
      outputDivEl.appendChild(h4Desc);
      h4Desc.innerText = `Mountain Discription:  ${av.desc}`;

      let h4Elevation = document.createElement("h4");
      outputDivEl.appendChild(h4Elevation);
      h4Elevation.innerText = `Mountain  Elevation:  ${av.elevation}`;
    } else {
      return;
    }

  });


}

