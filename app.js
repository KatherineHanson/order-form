'use strict';

// ORDER VARIABLES
// For creating orders
var allOrders = [];
var submitButton = document.getElementById('form-input');
PendingOrder.e = document.getElementById('myDropdown');
PendingOrder.strUser = '';

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
}

// EVENT HANDLER
function handleSubmit(event) {
  event.preventDefault();
  console.log('Hello!');
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
  allOrders.push(new
   PendingOrder(howMany,
     billingName,
     billingAddressLine1,
     billingAddressLine2,
     billingCity,
     billingState,
     billingZipCode,
     shippingName,
     shippingAddressLine1,
     shippingAddressLine2,
     shippingCity,
     shippingState,
     shippingZipCode,
     creditCardNumber,
     creditCardVerification,
     productName));
  // store allOrders in localStorage
  //console.log(allOrders);
  storeToLocalStorage();
  console.log('store');
  console.log(localStorage.getItem('orders'));
  console.log('json');
  console.log(JSON.parse(localStorage.getItem('orders')));
}

// store data in localStorage every time the data changes
function storeToLocalStorage() {
  localStorage.setItem('orders', JSON.stringify(allOrders));
}

// EVENT LISTENER FOR HANDLING CLICKING OF SUBMIT BUTTON
function init() {
  submitButton.addEventListener('submit', handleSubmit);
}

init();
