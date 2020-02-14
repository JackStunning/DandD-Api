import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { fetchURL } from './d&d-db';

console.log('typeof fetchURL', typeof fetchURL)

//const url = new GetUrl("http://www.dnd5eapi.co/api");

const resources = {
  classes: "http://www.dnd5eapi.co/api/classes",
  equipment: "http://www.dnd5eapi.co/api/equipment",
  spells: "http://www.dnd5eapi.co/api/spells"
};


const urls = {
  "ability-scores": "/api/ability-scores",
  "classes": "/api/classes",
  "conditions": "/api/conditions",
  "damage-types": "/api/damage-types",
  "equipment-categories": "/api/equipment-categories",
  "equipment": "/api/equipment",
  "features": "/api/features",
  "languages": "/api/languages",
  "magic-schools": "/api/magic-schools",
  "monsters": "/api/monsters",
  "proficiencies": "/api/proficiencies",
  "races": "/api/races",
  "skills": "/api/skills",
  "spellcasting": "/api/spellcasting",
  "spells": "/api/spells",
  "startingequipment": "/api/startingequipment",
  "subclasses": "/api/subclasses",
  "subraces": "/api/subraces",
  "traits": "/api/traits",
  "weapon-properties": "/api/weapon-properties"
};

const urlKeys = Object.keys(urls);

console.log(urlKeys)

$(document).ready(function(){

  $("#button").click(function (e) {
    $("#data-div").empty();
    let resource = $("#resources").val();
    console.log(resource)
    e.preventDefault()
    
    const userInput = $("#resources").val();
    const myURL = resources[userInput];
    const results = fetchURL(myURL);
    console.log('results', results);
    const myInterval = setInterval(() => {
      
      console.log('timeoute', results);
      if (results) {
        console.log('results exist');
        results.then((results) => {
          results.forEach(classs => $("#data-div").append(`${classs.name} <br>`));
          clearInterval(myInterval);
        })
      }

    }, 200);

    // if (resource == "classes") {
    //   getDataClasses();
    // } else if (resource == "equipment") {
    //   getDataEquipment();
    // } else if (resource == "spells") {
    //   getDataSpells();
    // }
  })
});




