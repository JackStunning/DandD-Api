import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

let url = "http://www.dnd5eapi.co/api/";

function getData() {

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      $("#data-div").append(data.classes)
    });
}

$(document).ready(function(){
  $("#button").click(function(e){
    e.preventDefault()
    getData();
  })
});