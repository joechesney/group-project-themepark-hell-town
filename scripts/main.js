"use strict";

const model = require('./model'); 
const view = require('./view');
const controller = require('./controller');

//populate page w/ html 
view.populatePage();
// model.getParkData('areas'); //test
// model.getParkData('attractions'); //test


// controller.searchAttractionsByTime();  



model.getParkData('areas') 
   .then(areas=>{
      view.printAreas(areas);
   })
   .then(()=>{ 
      controller.activateListeners();
   });


// PRINT THE CURRENT ATTRACTIONS FOR THE CURRENT MACHINE TIME:
// model.getParkData('attractions') 
//    .then(attractions=>{
//       view.printAttractionsByHour(attractions);
//    })

