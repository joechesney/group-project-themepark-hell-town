"use strict";
const $ = require('jquery');

// fill page w html content
module.exports.populatePage=()=>{
};

//populate css grid w/ color coded areas
module.exports.printAreas = (areas)=>{
   areas.forEach(area => {
      $('#areaGrid').append(
         `<div class='gridItem' id='item${area.id}' 
         style='background-color:#${area.colorTheme};'>
         ${area.name}</div>`
      );
   });
};

//populate side bar w/ current attractions
module.exports.printAttractionsByHour = (attractions)=>{
};

 