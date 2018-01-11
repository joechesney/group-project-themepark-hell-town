"use strict";
const $ = require('jquery');
const model = require('./model'); 
const view = require('./view');
const controller = require('./controller');

//populate page w/ html 
view.populatePage();

model.getParkData('areas') 
   .then(areas=>{
      view.printAreas(areas);
   })
   .then(()=>{
      controller.activateListeners();
   });

// model.getParkData('attractions') 
//    .then(attractions=>{
//       view.printAttractionsByHour(attractions);
//    })

// controller.activateListeners();