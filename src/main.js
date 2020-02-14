import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { GetEndPoint } from './d&d-db';

const url = "http://www.dnd5eapi.co/api/";

function getData() {

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let newData = data;
      console.log("newData"+JSON.stringify(newData));
      console.log(newData);
      return newData;
    });
}

$(document).ready(function(){
  let data = getData();
  let endPoint = new GetEndPoint();
  console.log("endPoint"+JSON.stringify(endPoint));
  console.log("jqueryData"+data);
  $("#data-div").text(data);
  $("#data-div").text("hello");
});