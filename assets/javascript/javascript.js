$(document).ready(function(){

  // initialize Firebase
  var config = {
    apiKey: "AIzaSyDl8CPr2FKWy-GXlrZXbOQhnQ5q-sqUGVo",
    authDomain: "trainscheduler-17c34.firebaseapp.com",
    databaseURL: "https://trainscheduler-17c34.firebaseio.com",
    projectId: "trainscheduler-17c34",
    storageBucket: "trainscheduler-17c34.appspot.com",
    messagingSenderId: "267037135602"
  };
  firebase.initializeApp(config);

  
// Capture click
$("#submitButton").on("click", function() {

  // Variables hold user input
  var trainName = $('#trainNameInput').val().trim();
  var destination = $('#destinationInput').val().trim();
  var time = $('#timeInput').val().trim();
  var frequency = $('#frequencyInput').val().trim();


  // When the input fields are filled
  if (!(trainName && destination && time && frequency)) {
    alert('please fill all fields');
    return;
  }{

  // Push that data to Firebase
  database.ref().push({
    trainName: trainNameInput,
    destination: destinationInput,
    time: timeInput,
    frequency: frequencyInput
  });  
 index++;
 console.log ("New train");   
}


});
}