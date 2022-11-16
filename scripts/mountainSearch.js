import { mountainsArray } from "./mountainData.js";

const sMountainEl = document.getElementById("sMountain");
const outputDivEl = document.getElementById("outputDiv");




for (let i = 0; i < mountainsArray.length; i++) {
  const element = mountainsArray[i].name;
  let theOption = new Option(element);
  sMountainEl.appendChild(theOption);


sMountainEl.onchange = displayItems;

function displayItems() {
    console.log('it works')
    let sMountainElValue = sMountainEl.value;
    mountainsArray.forEach(av => {
       if (sMountainElValue == av.name) {

        let h4Name = document.createElement('h4');
        outputDivEl.appendChild(h4Name);
        h4Name.innerText = `Mountain Name:   ${av.name}`;

        let h4Desc = document.createElement('h4');
        outputDivEl.appendChild(h4Desc);
        h4Desc.innerText = `Mountain Discription:  ${av.desc}`;

        let h4Elevation = document.createElement('h4');
        outputDivEl.appendChild(h4Elevation);
        h4Elevation.innerText = `Mountain  Elevation:  ${av.elevation}`;
       }
       else {
        console.log('no it match')

       }
    })
    console.log(sMountainElValue);

}
