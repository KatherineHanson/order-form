'use strict';

// ORDER VARIABLES
// For creating orders
PendingOrder.allOrders = [];
var submitButton = document.getElementById('form-input');
PendingOrder.e = document.getElementById('myDropdown');
PendingOrder.strUser = '';
var orderData;
var displayPendingOrders = document.getElementById('pendingOrders');
retrieveLocalStorage();

// CONSTRUCTOR FOR ORDERS
function PendingOrder(howMany, billingName, billingAddress1, billingAddress2 , billingCity, billingState, billingZip,
shippingName, shippingAddress1, shippingAddress2, shippingCity, shippingState, shippingZip, creditCardNumber,
creditVer, productName) {
  this.howMany = howMany;
  this.billingName = billingName;
  this.billingAddress1 = billingAddress1;
  this.billingAddress2 = billingAddress2;
  this.billingCity = billingCity;
  this.billingState = billingState;
  this.billingZip = billingZip;
  this.shippingName = shippingName;
  this.shippingAddress1 = shippingAddress1;
  this.shippingAddress2 = shippingAddress2;
  this.shippingCity = shippingCity;
  this.shippingState = shippingState;
  this.shippingZip = shippingZip;
  this.creditCardNumber = creditCardNumber;
  this.creditVer = creditVer;
  this.productName = productName;
  PendingOrder.allOrders.push(this);
}

// EVENT LISTENER FOR HANDLING CLICKING OF IMAGES
submitButton.addEventListener('submit', handleSubmit);

// EVENT HANDLER
function handleSubmit(event) {
  console.log('Hello!');
  event.preventDefault();
  // when user clicks submit
  // collect selected dropdown value
  PendingOrder.strUser = PendingOrder.e.options[PendingOrder.e.selectedIndex].value;
  var productName = PendingOrder.strUser;
  // collect text field values
  // instantiate order object
  var howMany = event.target.howMany.value;
  var billingName = event.target.billingName.value;
  var billingAddressLine1 = event.target.billingAddressLine1.value;
  var billingAddressLine2 = event.target.billingAddressLine2.value;
  var billingCity = event.target.billingCity.value;
  var billingState = event.target.billingState.value;
  var billingZipCode = event.target.billingZipCode.value;
  var shippingName = event.target.shippingName.value;
  var shippingAddressLine1 = event.target.shippingAddressLine1.value;
  var shippingAddressLine2 = event.target.shippingAddressLine2.value;
  var shippingCity = event.target.shippingCity.value;
  var shippingState = event.target.shippingState.value;
  var shippingZipCode = event.target.shippingZipCode.value;
  var creditCardNumber = event.target.creditCardNumber.value;
  var creditCardVerification = event.target.creditCardVerification.value;
  new PendingOrder(howMany,billingName,billingAddressLine1,billingAddressLine2,billingCity,billingState,billingZipCode,shippingName,shippingAddressLine1,shippingAddressLine2,shippingCity,shippingState,shippingZipCode,creditCardNumber,creditCardVerification, productName);
  // convert PendingOrder.allOrders to JSON
  // store PendingOrder.allOrders in localStorage
  storeToLocalStorage();
  // retrieve PendingOrder.allOrders from localStorage
  // convert PendingOrder.allOrders back from JSON
  // render as order item in orders.html
}

// store data in localStorage every time the data changes
function storeToLocalStorage() {
  localStorage.setItem('orders', JSON.stringify(PendingOrder.allOrders));
}

// retrieve stored data on page load
function retrieveLocalStorage() {
  // if localStorage exists
  if (localStorage.length > 0) {
    // retrieve, parse, assign to array of objects
    orderData = localStorage.getItem('orders');
    PendingOrder.allOrders = JSON.parse(orderData);

    for(var i = 0; i < PendingOrder.allOrders.length; i++) {
      renderOrder(i);
    }
  } else {
    // use console.log message to indicate if something is wronng
    console.log('localStorage is not present!');
  }
}

function makeElement(elementType, content, parent) {
  // create
  var newEl = document.createElement(elementType);
  // content
  newEl.textContent = content;
  // append
  parent.appendChild(newEl);
};

// CREATE ORDER ON orders.html page
function renderOrder(i) {
  var ulEl = document.createElement('ul');
  makeElement('li',PendingOrder.allOrders[i].howMany, ulEl);
  makeElement('li',PendingOrder.allOrders[i].billingName, ulEl);
  makeElement('li',PendingOrder.allOrders[i].billingAddress1, ulEl);
  makeElement('li',PendingOrder.allOrders[i].billingAddress2, ulEl);
  makeElement('li',PendingOrder.allOrders[i].billingCity, ulEl);
  makeElement('li',PendingOrder.allOrders[i].billingState, ulEl);
  makeElement('li',PendingOrder.allOrders[i].billingZip, ulEl);
  makeElement('li',PendingOrder.allOrders[i].shippingName, ulEl);
  makeElement('li',PendingOrder.allOrders[i].shippingAddress1, ulEl);
  makeElement('li',PendingOrder.allOrders[i].shippingAddress2, ulEl);
  makeElement('li',PendingOrder.allOrders[i].shippingCity, ulEl);
  makeElement('li',PendingOrder.allOrders[i].shippingState, ulEl);
  makeElement('li',PendingOrder.allOrders[i].shippingZip, ulEl);
  makeElement('li',PendingOrder.allOrders[i].creditCardNumber, ulEl);
  makeElement('li',PendingOrder.allOrders[i].creditVer, ulEl);
  makeElement('li',PendingOrder.allOrders[i].productName, ulEl);
  displayPendingOrders.appendChild(ulEl);
}
