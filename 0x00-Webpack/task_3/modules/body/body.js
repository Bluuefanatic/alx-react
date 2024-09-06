import $ from 'jquery';
import _ from 'lodash';

$(function() {
  let count = 0;

  function updateCounter() {
    count++;
    $('#counter').text(`Counter: ${count}`);
  }

  $('body').append(`
    <button id="clickButton">Click me</button>
    <div id="counter">Counter: 0</div>
  `);

  $('#clickButton').on('click', _.debounce(updateCounter, 300));
});
