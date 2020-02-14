import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { GetEndPoint } from './d&d-db';

const urlClasses = "http://www.dnd5eapi.co/api/classes";
const urlEquipment = "http://www.dnd5eapi.co/api/equipment";
const urlSpells = "http://www.dnd5eapi.co/api/spells";


// let newUrl = "http://www.dnd5eapi.co/"

function getDataClasses() {
  fetch(urlClasses)
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach(classs => $("#data-div").append(`${classs.name} <br>`))
    });
}

function getDataEquipment() {
  fetch(urlEquipment)
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach(item => $("#data-div").append(`${item.name} <br>`))
    });
}

function getDataSpells() {
  fetch(urlSpells)
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach(spell => $("#data-div").append(`${spell.name} <br>`))
    });
}

$(document).ready(function(){

  $("#button").click(function(e){
    $("#data-div").empty();
    let resource = $("#resources").val();
    let endPoint = new GetEndPoint(resource);
    console.log(endPoint)
    console.log(resource)
    e.preventDefault()
    if (resource == "classes") {
      getDataClasses();
    } else if (resource == "equipment") {
      getDataEquipment();
    } else if (resource == "spells") {
      getDataSpells();
    }
  })
});