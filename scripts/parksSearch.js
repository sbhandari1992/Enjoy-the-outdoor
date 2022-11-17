import { nationalParksArray } from "./nationalParkData.js";
import { locationsArray } from "./locationData.js";
import { parkTypesArray } from "./parkTypeData.js";

///getting all html element to manipulate
const showAllBtn = document.getElementById("showAll");

const parkTypeBtn = document.getElementById("parkType");
const sParkTypeBtn = document.getElementById("sParkType");

const parkLocationBtn = document.getElementById("parkLocation");
const sParkLocationBtn = document.getElementById("sLocation");
const feildSet = document.getElementById("feildSet");
const feildSetSearch = document.getElementById("feildSetSearch");
const firstDivinFeildset = document.getElementById("firstDivinFeildset");




const tBodyEl = document.getElementById("tBody");

///this is just hide and show button as user click
sParkTypeBtn.style.display = "none";
sParkLocationBtn.style.display = "none";
feildSet.style.display = "none";


firstDivinFeildset.onclick = function (){
    feildSet.style.display = "none";
}
//handel parksTypeBtn
parkTypeBtn.onclick = function () {
  sParkLocationBtn.style.display = "none";
  if (sParkTypeBtn.style.display !== "none") {
    sParkTypeBtn.style.display = "none";
  } else {
    sParkTypeBtn.style.display = "inline";
  }
};
//handel parklocationBtn
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

/// to show all parks  
showAllBtn.onclick = getAllData;

function getAllData() {
    feildSet.style.display = "block";
    sParkTypeBtn.style.display = "none";
  sParkLocationBtn.style.display = "none";
  tBodyEl.innerHTML = "";
  return nationalParksArray.forEach(array => getTableRowsAndColumns(array));
}

//show parks by location
sParkLocationBtn.onchange = getParksByLocation;

function getParksByLocation() {
    feildSet.style.display = "block";
  tBodyEl.innerHTML = "";
  let selectedParkLoc = nationalParksArray.filter(
    (av) => sParkLocationBtn.value == av.State
  );
  console.log(selectedParkLoc);
  return selectedParkLoc.forEach((array) => getTableRowsAndColumns(array));
}

//show parks by park type
sParkTypeBtn.onchange = getParksByType;

function getParksByType() {
    feildSet.style.display = "block";
  tBodyEl.innerHTML = "";
  let selectedParkType = nationalParksArray.filter((array) =>
    array.LocationName.includes(sParkTypeBtn.value)
  );
  return selectedParkType.forEach((array) => getTableRowsAndColumns(array));
}

///to create table when you pass argument

function getTableRowsAndColumns(array) {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerText = array.LocationID;
  tr.appendChild(td1);

  let td2 = document.createElement("td");
  td2.innerText = array.LocationName;
  tr.appendChild(td2);

  let td3 = document.createElement("td");
  td3.innerText = array.Address;
  tr.appendChild(td3);

  let td4 = document.createElement("td");
  td4.innerText = array.City;
  tr.appendChild(td4);

  let td5 = document.createElement("td");
  td5.innerText = array.State;
  tr.appendChild(td5);

  let td6 = document.createElement("td");
  td6.innerText = array.ZipCode;
  tr.appendChild(td6);

  let td7 = document.createElement("td");
  td7.innerText = array.Phone;
  tr.appendChild(td7);

  let td8 = document.createElement("td");
  td8.innerText = array.Fax;
  tr.appendChild(td8);

  let td9 = document.createElement("td");
  td9.textContent = array.Latitude;
  tr.appendChild(td9);

  let td10 = document.createElement("td");
  td10.textContent = array.Longitude;
  tr.appendChild(td10);

  let td11 = document.createElement("td");
  td11.textContent = `${array.Location.coordinates} ${array.Location.type}`;
  tr.appendChild(td11);

  let td13 = document.createElement("td");
  td13.textContent = array.Visit;
  tr.appendChild(td13);

  tBodyEl.appendChild(tr);
}
