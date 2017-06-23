'use strict';

// ORDER VARIABLES
var allOrders = [];
var displayPendingOrders = document.getElementById('pendingOrders');

function getFromLocalStorage() {
  // if localStorage exists
  if (localStorage.length > 0) {
      // retrieve, parse, assign to array of objects
    allOrders = JSON.parse(localStorage.getItem('orders'));
    console.log('allOrders test ' + allOrders[0].howMany);
    for(var i = 0; i < allOrders.length; i++) {
      renderOrder(i);
    }
  } else {
    console.log('Nothing currently in storage!');
  }
}

// CREATE ORDER ON orders.html page
function renderOrder(i) {
  var ulEl = document.createElement('ul');
  makeElement('li',allOrders[i].howMany, ulEl);
  makeElement('li',allOrders[i].billingName, ulEl);
  makeElement('li',allOrders[i].billingAddress1, ulEl);
  makeElement('li',allOrders[i].billingAddress2, ulEl);
  makeElement('li',allOrders[i].billingCity, ulEl);
  makeElement('li',allOrders[i].billingState, ulEl);
  makeElement('li',allOrders[i].billingZip, ulEl);
  makeElement('li',allOrders[i].shippingName, ulEl);
  makeElement('li',allOrders[i].shippingAddress1, ulEl);
  makeElement('li',allOrders[i].shippingAddress2, ulEl);
  makeElement('li',allOrders[i].shippingCity, ulEl);
  makeElement('li',allOrders[i].shippingState, ulEl);
  makeElement('li',allOrders[i].shippingZip, ulEl);
  makeElement('li',allOrders[i].creditCardNumber, ulEl);
  makeElement('li',allOrders[i].creditVer, ulEl);
  makeElement('li',allOrders[i].productName, ulEl);
  displayPendingOrders.appendChild(ulEl);
}

function makeElement(elementType, content, parent) {
  // create
  var newEl = document.createElement(elementType);
  // content
  newEl.textContent = content;
  // append
  parent.appendChild(newEl);
};

function init() {
  getFromLocalStorage();
}

init();
