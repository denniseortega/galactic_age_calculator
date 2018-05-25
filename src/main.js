//front-end
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { AgeCalculator} from './agecalculator.js';

$(document).ready(function() {
  $('#ageform').submit(function(event) {
    event.preventDefault();
    var age = $('#age').val();
    var output = age();
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
