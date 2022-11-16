import { nationalParksArray } from "./nationalParkData.js";
import { locationsArray } from "./locationData.js";
import { parkTypesArray } from "./parkTypeData.js";

locationsArray.forEach(function (av) {
    let optionElement = new Option(av);
    sLocation.appendChild(optionElement);
})

parkTypesArray.forEach(function(av) {
    let optionElement = new Option(av);
    sParkTypeBtn.appendChild(optionElement);

});

