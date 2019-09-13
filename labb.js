const fs = require('fs'); //Nu inkluderar jag require metoden för att inkludicera File System modulen
const csv = require("csvtojson"); //Detsamma gäller här men i denna fall inkludiserar jag cvs omvanlingen till json modulen,

function Convert(file) { //Nu skapar jag function File för att läsa från CSV

  csv()  // min cvs function
    .fromFile(file)  //Nu hämtar jag file
    .then((jsonObj)=>{  //Nu gör jag den till en JSON objekt
      json = JSON.stringify(jsonObj); //Nu stringifierar jag JSON objektet
      fs.writeFileSync('webb1.json', json, 'utf-8'); //Nu skriver jag fil
  });

}

Convert(process.argv[2]); //Nu kallar jag funktionen webb1.csv i kommandotolken (Node [0], labb.js[1], webb1.csv[2])


//Webb1.cvs är min excel fil som jag har koncerterat till csv
