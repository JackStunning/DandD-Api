import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { GetEndPoint } from './d&d-db';

let url = "http://www.dnd5eapi.co/api/";

function getData(endPoint) {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const newData = data.classes
      endPoint.setEndPoint(newData);
      console.log("newData "+newData)
      console.log(endPoint)
      console.log(data)
      return data
    });
}

$(document).ready(function(){
  let newEndPoint = new GetEndPoint();
  getData(newEndPoint);
});