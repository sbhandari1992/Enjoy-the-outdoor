import { mountainsArray } from "./mountainData.js";

const sMountainEl = document.getElementById("sMountain");
const outputDivEl = document.getElementById("outputDiv");
const outputimgDivEl = document.getElementById("outputImgDiv");
const outputFieldset = document.getElementById("outputFieldset");
const firstFieldSet = document.getElementById("firstFieldSet");


outputFieldset.style.visibility = 'hidden';

// sParkLocationBtn.selectedIndex = 0;
// sParkTypeBtn.selectedIndex = 0;

for (let i = 0; i < mountainsArray.length; i++) {
  const element = mountainsArray[i].name;
  let theOption = new Option(element);
  sMountainEl.appendChild(theOption);
}

firstFieldSet.onclick = function (){
  console.log('yes it clicked');
  outputFieldset.style.visibility = 'hidden';
  sMountainEl.selectedIndex = 0;

}


sMountainEl.onchange = displayItems;

function displayItems() {
  
  outputFieldset.style.visibility = 'visible';

  let sMountainElValue = sMountainEl.value;
  outputDivEl.innerHTML = '';
  outputimgDivEl.innerHTML = '';


  mountainsArray.forEach((av) => {


    if (sMountainElValue == av.name) {
      
      let imgEl = document.createElement("img");
      outputimgDivEl.appendChild(imgEl);
      let imgSrc = av.img;
      imgEl.src = `../images/${imgSrc}`;
      imgEl.classList.add("myImg");

     

      let divName = document.createElement('div');
      divName.classList.add("myDiv");
      divName.style = "font-size: xx-large"
      outputDivEl.appendChild(divName);
      divName.innerText = av.name;

      let divElevation = document.createElement("div");
      divElevation.classList.add("myDiv");
      divElevation.style = "font-size: x-large"
      outputDivEl.appendChild(divElevation);
      divElevation.innerText = `Elevation: ${av.elevation} ft`;

      let divLat = document.createElement("div");
      divLat.style = "font-size: larger"
      divLat.classList.add("myDiv")
      outputDivEl.appendChild(divLat);
      divLat.innerText = `Lat - ${av.coords.lat} / Lan - ${av.coords.lng}`;

      let divDes = document.createElement("div");
      divDes.style = "font-size: large"
      divDes.classList.add("myDiv")
      outputDivEl.appendChild(divDes);
      divDes.innerText = av.desc;

    } else {
      return;
    }

  });


}

