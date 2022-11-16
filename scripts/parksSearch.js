import { nationalParksArray } from "./nationalParkData.js";
import { locationsArray } from "./locationData.js";
import { parkTypesArray } from "./parkTypeData.js";
// console.log(locationsArray.length);

///to display choose  by location dropdown 
locationsArray.forEach(function (av) {
    let optionElement = new Option(av);
    sLocation.appendChild(optionElement);
})

///to display choose  by park type dropdown 
parkTypesArray.forEach(function(av) {
    let optionElement = new Option(av);
    sParkTypeBtn.appendChild(optionElement);

});


// let table = document.getElementById("tableBody");
// function showAll() {
//   for (let nationalPark of nationalParksArray) {

//     let tr = document.createElement("tr");

//     let td1 = document.createElement("td");
//     td1.textContent = nationalPark.LocationID;
//     tr.appendChild(td1);

//     let td2 = document.createElement("td");
//     td2.textContent = nationalPark.LocationName;
//     tr.appendChild(td2);

//     let td3 = document.createElement("td");
//     td3.textContent = nationalPark.Address;
//     tr.appendChild(td3);

//     let td4 = document.createElement("td");
//     td4.textContent = nationalPark.City;
//     tr.appendChild(td4);

//     let td5 = document.createElement("td");
//     td5.textContent = nationalPark.State;
//     tr.appendChild(td5);

//     let td6 = document.createElement("td");
//     td6.textContent = nationalPark.ZipCode;
//     tr.appendChild(td6);

//     let td7 = document.createElement("td");
//     td7.textContent = nationalPark.Phone;
//     tr.appendChild(td7);

//     let td8 = document.createElement("td");
//     td8.textContent = nationalPark.Fax;
//     tr.appendChild(td8);

//     let td9 = document.createElement("td");
//     td9.textContent = nationalPark.Latitude;
//     tr.appendChild(td9);

//     let td10 = document.createElement("td");
//     td10.textContent = nationalPark.Longitude;
//     tr.appendChild(td10);

//     let td11 = document.createElement("td");
//     td11.textContent = nationalPark.Location.coordinates;
//     tr.appendChild(td11);

//     let td12 = document.createElement("td");
//     td12.textContent = nationalPark.Location.type;
//     tr.appendChild(td12);
     
//     let td13 = document.createElement("td");
//     td13.textContent = nationalPark.Visit;
//     tr.appendChild(td13);

//     // table.appendChild(tr);

    
//   }

  
// }
// console.log(showAll());

// const  allStates = nationalParksArray.map(av => av.State);
// const states = Array.from(new Set(allStates));
// console.log(states);





// /to display all park on table
// let getAll = nationalParksArray.forEach(function(av) {
//     console.log(av.State)
//     let tr = document.createElement("tr");

//     let td1 = document.createElement("td");
//     td1.textContent = av.LocationID;
//     tr.appendChild(td1);

//     let td2 = document.createElement("td");
//     td2.textContent = av.LocationName;
//     tr.appendChild(td2);

//     let td3 = document.createElement("td");
//     td3.textContent = av.Address;
//     tr.appendChild(td3);

//     let td4 = document.createElement("td");
//     td4.textContent = av.City;
//     tr.appendChild(td4);

//     let td5 = document.createElement("td");
//     td5.textContent = av.State;
//     tr.appendChild(td5);

//     let td6 = document.createElement("td");
//     td6.textContent = av.ZipCode;
//     tr.appendChild(td6);

//     let td7 = document.createElement("td");
//     td7.textContent = av.Phone;
//     tr.appendChild(td7);

//     let td8 = document.createElement("td");
//     td8.textContent = av.Fax;
//     tr.appendChild(td8);

//     let td9 = document.createElement("td");
//     td9.textContent = av.Latitude;
//     tr.appendChild(td9);

//     let td10 = document.createElement("td");
//     td10.textContent = av.Longitude;
//     tr.appendChild(td10);

//     let td11 = document.createElement("td");
//     td11.textContent = av.Location.coordinates;
//     tr.appendChild(td11);

//     let td12 = document.createElement("td");
//     td12.textContent = av.Location.type;
//     tr.appendChild(td12);
     
//     let td13 = document.createElement("td");
//     td13.textContent = av.Visit;
//     tr.appendChild(td13);

//     // table.appendChild(tr);


// });
// console.log(getAll);
// for (let nationalPark of nationalParksArray) {

//     console.log(nationalPark.Address);
    
// }



// for (let nationalPark of nationalParksArray) {
//     console.log(nationalPark);
//     optionElement.innertext = 
// }


// const tHead = document.createElement("th");
// console.log(tHead);

// let tableElement = document.createElement('table');
// tableElement.setAttribute('id', 'myTable');
// console.log(tableElement);

// let tableThElement = document.createElement('th');
// tableThElement.setAttribute('id', 'myTableHead');
// console.log(tableThElement);

// let tableBodyElement = document.createElement('tbody');
// tableBodyElement.setAttribute('id', 'myTableBody');
// console.log(tableBodyElement);

// document.getElementById("tContainer").appendChild(tableElement);
// document.getElementById('myTable').appendChild(tableThElement);
// document.getElementById('myTableBody').appendChild(tableElement);

// tableThElement.innerText = 'LocationID';



// var row = table.insertRow();
// console.log(row);
// document.getElementById("tContainer").appendChild(table);


// const items = states.map(items => '<td>' + items + '</td>');
// const htmlTable = items.join('');
// console.log(htmlTable);


// const table = document.createElement("table");
// console.log(table);
// const thLocationID = document.createElement("thead");
// console.log(thLocationID);
// document.querySelector.table.appendChild(thLocationID);

// var row = table.insertRow();
// console.log(row);
// let perRow = 12;

// for (let i = 0; i < nationalParksArray.length; i++) {
//     let cell = row.insertCell();
//     // console.log(cell);
//     // console.log(nationalParksArray[i]);
//     cell.innerHTML = nationalParksArray[i].State;
//     row.insertCell();
//     cell.innerHTML = nationalParksArray[i].Address;


//     console.log(nationalParksArray[i].City);

//     var next = i + 1;
//     if (next%perRow == 0 && next !== nationalParksArray.length) {
//         row = table.insertRow();
//     }


// }


// document.getElementById("tContainer").appendChild(table);






// var books = [
//     {
//         title: 'The Stranger',
//         author: 'Albert Camus',
//         alreadyRead: true
//     },
//     {
//         title: 'Binging with Babish',
//         author: 'Andrew Rea',
//         alreadyRead: true
//     },
//     {
//         title: 'You Suck at Cooking: The Absurdly Practical Guide to Sucking Slightly Less at Making Food: A Cookbook',
//         author: 'You Suck at Cooking',
//         alreadyRead: false
//     }];

// createTable();

// function createTable() {
//     var table = document.createElement("table");  //makes a table element for the page

//     table += "<tr class='firstRow'><th>Title</th><th>Author</th><th>Read?</th></tr>";  //adds the first row that contains the sections for the table

//     for (var i = 0; i < books.length; i++)  //loops through the array 
//     {
//         //add info from the array into this
//         table += "<tr><td>" + books[i].title + "</td><td>";
//     }

//     document.body.append(table);
// }




// let tableElement = document.createElement('table');
// console.log(tableElement);





