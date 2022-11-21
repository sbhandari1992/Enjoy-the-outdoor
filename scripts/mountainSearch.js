import { mountainsArray } from "./mountainData.js";

const sMountainEl = document.getElementById("sMountain");
const outputDivEl = document.getElementById("outputDiv");
const outputimgDivEl = document.getElementById("outputImgDiv");
const outputFieldset = document.getElementById("outputFieldset");
const firstFieldSet = document.getElementById("firstFieldSet");
const myNav = document.getElementById("myNav");



outputFieldset.style.visibility = 'hidden';

mountainsArray.forEach(myOPt => {
  let theOption = new Option(myOPt.name);
  sMountainEl.appendChild(theOption);
});

//clear result when user click on fieldset section
firstFieldSet.onclick = function (){
  outputFieldset.style.visibility = 'hidden';
  sMountainEl.selectedIndex = 0;

}
//clear result when user click on nav section
myNav.onclick = function (){
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

    if (sMountainElValue == av.name ) {
      let sr = document.createElement('div');
      outputimgDivEl.appendChild(sr);
      sr.classList.add("mySr");

      let imgEl = document.createElement("img");
      outputimgDivEl.appendChild(imgEl);
      let imgSrc = av.img;
      imgEl.src = `../images/${imgSrc}`;
      imgEl.classList.add("myImg");


      let ss = document.createElement('div');
      outputimgDivEl.appendChild(ss);
      ss.classList.add("mySs");

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
      getSunsetForMountain(av.coords.lat, av.coords.lng).then(data => {
        console.log(data.results)
        sr.innerText = `Sunrise ${data.results.sunrise} UTC`;
        ss.innerText = `Sunset ${data.results.sunset} UTC`;
      });

      let divDes = document.createElement("div");
      divDes.style = "font-size: large"
      divDes.classList.add("myDiv")
      outputDivEl.appendChild(divDes);
      divDes.innerText = av.desc;

    } else {
      sMountainEl.selectedIndex = 0;
    }

  });


}

async function getSunsetForMountain(lat, lng){
  let response = await fetch( `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
     let data = await response.json();
     return data;
}


// getSunsetForMountain(av.coords.lat, av.coords.lng).then(data => {
//         console.log(data.results)
//         sr.innerText = `Sunrise ${data.results.sunrise} UTC`;
//         ss.innerText = `Sunset ${data.results.sunset} UTC`;
//       });


















// console.log(getSunsetForMountain());

// Fetch the sunset/sunrise times for a specific mountain getSunsetForMountain(44.320686, -71.291742).then(data => {
  // getSunsetForMountain(lat.forEach(arr => console.log(arr)),lng.forEach(arr => console.log(arr))).then(data => {
  //   // lat.forEach(arr => console.log(arr) );
    
  //   console.log(data.results.sunset);
  //   // let sunset = data.results.sunset;

  //   // return sunset;

  //   // return data.results.sunset
  //   // let dataObject = data.results;
  //   // console.log(dataObject.sunset);
  // }).catch((message) => {
  //   console.log('cannot find because ' + message);
  // })

  // console.log(getSunsetForMountain());

  ///question
// let lati = mountainsArray.forEach(function (arr) {
//   return arr.coords.lat

// });
// console.log(lati);
// console.log(lati);

// let lng = mountainsArray.forEach((av) => {
//   return (av.coords.lng);
// });
// console.log(lng);

