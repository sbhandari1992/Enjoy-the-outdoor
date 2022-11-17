import { nationalParksArray } from "./nationalParkData.js";
import { locationsArray } from "./locationData.js";
import { parkTypesArray } from "./parkTypeData.js";

///getting all html element to manipulate
const showAllBtn = document.getElementById("showAll");

const parkTypeBtn = document.getElementById("parkType");
const sParkTypeBtn = document.getElementById("sParkType");

const parkLocationBtn = document.getElementById("parkLocation");
const sParkLocationBtn = document.getElementById("sLocation");
const feildSet = document.getElementById('feildSet');

const tBodyEl = document.getElementById("tBody");

///this is just hide and show button as user click
sParkTypeBtn.style.display = "none";
sParkLocationBtn.style.display = "none";

parkTypeBtn.onclick = function () {
    sParkLocationBtn.style.display = "none";
  if (sParkTypeBtn.style.display !== "none") {
    sParkTypeBtn.style.display = "none";
  } else {
    sParkTypeBtn.style.display = "inline";
  }
};
parkLocationBtn.onclick = function () {
    sParkTypeBtn.style.display = "none";
  if (sParkLocationBtn.style.display !== "none") {
    sParkLocationBtn.style.display = "none";
  } else {
    sParkLocationBtn.style.display = "inline";
  }
};



///to put option for  choose  by location dropdown
locationsArray.forEach(function (av) {
  let optionElement = new Option(av);
  sLocation.appendChild(optionElement);
});

///to put option for  choose  by park type dropdown
parkTypesArray.forEach(function (av) {
  let optionElement = new Option(av);
  sParkTypeBtn.appendChild(optionElement);
});
/// to show all park when user click show all parks button
showAllBtn.onclick = getAllData;

function getAllData() {
    sParkTypeBtn.style.display = "none";
    sParkLocationBtn.style.display = "none";

    tBodyEl.innerHTML = "";

  nationalParksArray.forEach((av) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = av.LocationID;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerText = av.LocationName;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerText = av.Address;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.innerText = av.City;
    tr.appendChild(td4);

    let td5 = document.createElement("td");
    td5.innerText = av.State;
    tr.appendChild(td5);

    let td6 = document.createElement("td");
    td6.innerText = av.ZipCode;
    tr.appendChild(td6);

    let td7 = document.createElement("td");
    td7.innerText = av.Phone;
    tr.appendChild(td7);

    let td8 = document.createElement("td");
    td8.innerText = av.Fax;
    tr.appendChild(td8);

    let td9 = document.createElement("td");
    td9.textContent = av.Latitude;
    tr.appendChild(td9);

    let td10 = document.createElement("td");
    td10.textContent = av.Longitude;
    tr.appendChild(td10);

    let td11 = document.createElement("td");
    td11.textContent = `${av.Location.coordinates} ${av.Location.type}`;
    tr.appendChild(td11);

    let td13 = document.createElement("td");
    td13.textContent = av.Visit;
    tr.appendChild(td13);

    tBodyEl.appendChild(tr);
  });
}

//show parks by location

sParkLocationBtn.onchange = getParksByLocation;

function getParksByLocation() {
  console.log("function works");
  console.log(sParkLocationBtn.value);
  tBodyEl.innerHTML = "";

  // let selectedPark =  nationalParksArray.filter(av =>  sParkLocationBtn.value == av.State );
  nationalParksArray.forEach((av) => {
    // console.log(av.State);
    if (sParkLocationBtn.value == av.State) {
      let tr = document.createElement("tr");

      let td1 = document.createElement("td");
      td1.innerText = av.LocationID;
      tr.appendChild(td1);

      let td2 = document.createElement("td");
      td2.innerText = av.LocationName;
      tr.appendChild(td2);

      let td3 = document.createElement("td");
      td3.innerText = av.Address;
      tr.appendChild(td3);

      let td4 = document.createElement("td");
      td4.innerText = av.City;
      tr.appendChild(td4);

      let td5 = document.createElement("td");
      td5.innerText = av.State;
      tr.appendChild(td5);

      let td6 = document.createElement("td");
      td6.innerText = av.ZipCode;
      tr.appendChild(td6);

      let td7 = document.createElement("td");
      td7.innerText = av.Phone;
      tr.appendChild(td7);

      let td8 = document.createElement("td");
      td8.innerText = av.Fax;
      tr.appendChild(td8);

      let td9 = document.createElement("td");
      td9.textContent = av.Latitude;
      tr.appendChild(td9);

      let td10 = document.createElement("td");
      td10.textContent = av.Longitude;
      tr.appendChild(td10);

      let td11 = document.createElement("td");
      td11.textContent = `${av.Location.coordinates} ${av.Location.type}`;
      tr.appendChild(td11);

      let td13 = document.createElement("td");
      td13.textContent = av.Visit;
      tr.appendChild(td13);

      tBodyEl.appendChild(tr);
    }
  });
}


//show parks by park type

sParkTypeBtn.onchange = getParksByType;

function getParksByType() {
  console.log("function works");
  console.log(sParkTypeBtn.value);
  tBodyEl.innerHTML = "";

  // let selectedPark =  nationalParksArray.filter(av =>  sParkLocationBtn.value == av.State );
  nationalParksArray.forEach((av) => {
    if (av.LocationName.includes(sParkTypeBtn.value)) {
        let tr = document.createElement("tr");

      let td1 = document.createElement("td");
      td1.innerText = av.LocationID;
      tr.appendChild(td1);

      let td2 = document.createElement("td");
      td2.innerText = av.LocationName;
      tr.appendChild(td2);

      let td3 = document.createElement("td");
      td3.innerText = av.Address;
      tr.appendChild(td3);

      let td4 = document.createElement("td");
      td4.innerText = av.City;
      tr.appendChild(td4);

      let td5 = document.createElement("td");
      td5.innerText = av.State;
      tr.appendChild(td5);

      let td6 = document.createElement("td");
      td6.innerText = av.ZipCode;
      tr.appendChild(td6);

      let td7 = document.createElement("td");
      td7.innerText = av.Phone;
      tr.appendChild(td7);

      let td8 = document.createElement("td");
      td8.innerText = av.Fax;
      tr.appendChild(td8);

      let td9 = document.createElement("td");
      td9.textContent = av.Latitude;
      tr.appendChild(td9);

      let td10 = document.createElement("td");
      td10.textContent = av.Longitude;
      tr.appendChild(td10);

      let td11 = document.createElement("td");
      td11.textContent = `${av.Location.coordinates} ${av.Location.type}`;
      tr.appendChild(td11);

      let td13 = document.createElement("td");
      td13.textContent = av.Visit;
      tr.appendChild(td13);

      tBodyEl.appendChild(tr);

    }
  });
}
