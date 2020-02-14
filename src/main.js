import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { fetchURL, GetUrl } from './d&d-db';

$(document).ready(function(){

  $("#button").click(function (e) {
    $("#data-div").empty();
    e.preventDefault();

    let newURL = new GetUrl();
    console.log("newURL",newURL);
    console.log("newURL",newURL.resources);
    
    const userInput = $("#resources").val();
    const myURL = newURL.newUrl(userInput);
    const results = fetchURL(myURL);
    const myInterval = setInterval(() => {
      
      if (results) {
        results.then((results) => {
          results.forEach(classs => $("#data-div").append(`${classs.name} <br>`));
          clearInterval(myInterval);
        });
      }

    }, 200);
  });
});




