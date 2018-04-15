function onStart(){
    document.getElementById("event-name").disabled = true;
    document.getElementById("event-location").disabled = true;
    document.getElementById("all-day-event-checkbox").disabled = true;
    document.getElementById("all-day-event-date").disabled = true;
    document.getElementById("event-start-date").disabled = true;
    document.getElementById("event-end-date").disabled = true;
    document.getElementById("recurrent-event-type-selector").disabled = true;
    document.getElementById("create-event-button").disabled = true;
    //If the "Custom" option is chosen for the repeat selection menu
    document.getElementById("recurrent-event-end-date").disabled = true;
    document.getElementById("recurrent-event-time-selector").disabled = true;
    document.getElementById("daily-recurrent-freq").disabled = true;

}

window.onload = onStart;
var time;
var totalTime;
function toggleLocation(){
    var string = document.getElementById("event-name");
  console.log(string.value);
  console.log(string.value.length);
  if(string.value.length > 0){
    document.getElementById("event-location").disabled = false;
  }else{
    document.getElementById("event-location").disabled = true;
    document.getElementById("all-day-event-checkbox").disabled = true;
    document.getElementById("all-day-event-date").disabled = true;
    document.getElementById("event-start-date").disabled = true;
    document.getElementById("event-end-date").disabled = true;
    document.getElementById("recurrent-event-type-selector").disabled = true;
    document.getElementById("create-event-button").disabled = true;
    //If the "Custom" option is chosen for the repeat selection menu
    document.getElementById("recurrent-event-end-date").disabled = true;
    document.getElementById("recurrent-event-time-selector").disabled = true;
    document.getElementById("daily-recurrent-freq").disabled = true;


  }
}

function toggleAllDay(){
  var string = document.getElementById("event-location");
  console.log(string.value);
  console.log(string.value.length);
  if(string.value.length > 0){
    document.getElementById("all-day-event-checkbox").disabled = false;
    document.getElementById("event-start-date").disabled = false;
    document.getElementById("all-day-event-date").disabled = false;
  }else{
    document.getElementById("all-day-event-checkbox").disabled = true;
    document.getElementById("all-day-event-date").disabled = true;
    document.getElementById("event-start-date").disabled = true;
    document.getElementById("event-end-date").disabled = true;
    document.getElementById("recurrent-event-type-selector").disabled = true;
    document.getElementById("create-event-button").disabled = true;
    //If the "Custom" option is chosen for the repeat selection menu
    document.getElementById("recurrent-event-end-date").disabled = true;
    document.getElementById("recurrent-event-time-selector").disabled = true;
    document.getElementById("daily-recurrent-freq").disabled = true;
  }
}

function toggleEndDate(){
  var string = document.getElementById("event-start-date");
  console.log(string.value);
  console.log(string.value.length);
  if(string.value.length > 0){
    document.getElementById("event-end-date").disabled = false;
  }else{
    document.getElementById("event-end-date").disabled = true;
    document.getElementById("recurrent-event-type-selector").disabled = true;
    document.getElementById("create-event-button").disabled = true;
    //If the "Custom" option is chosen for the repeat selection menu
    document.getElementById("recurrent-event-end-date").disabled = true;
    document.getElementById("recurrent-event-time-selector").disabled = true;
    document.getElementById("daily-recurrent-freq").disabled = true;
  }
}

function toggleRepeatAndCreate(){
  var string1 = document.getElementById("event-end-date");
  var string2 = document.getElementById("all-day-event-date");

  if(string1.value.length > 0 || string2.value.length > 0){
    document.getElementById("recurrent-event-type-selector").disabled = false;
    document.getElementById("create-event-button").disabled = false;

  }else{
    document.getElementById("recurrent-event-type-selector").disabled = true;
    document.getElementById("create-event-button").disabled = true;

    //If the "Custom" option is chosen for the repeat selection menu
    document.getElementById("recurrent-event-end-date").disabled = true;
    document.getElementById("recurrent-event-time-selector").disabled = true;
    document.getElementById("daily-recurrent-freq").disabled = true;
  }
}

function toggleCustomOptions(){

  var string = document.getElementById("recurrent-event-type-selector").value;
  console.log(string);
  if(string == "custom"){
    document.getElementById("recurrent-event-time-selector").disabled = false;
    document.getElementById("daily-recurrent-freq").disabled = false;
    document.getElementById("recurrent-event-end-date").disabled = false;

  }else if(string == "day" || string == "week" || string == "month" || string == "year"){//FIX THIS
    document.getElementById("recurrent-event-end-date").disabled = false;

  }else{
    document.getElementById("create-event-button").disabled = true;

    //If the "Custom" option is chosen for the repeat selection menu
    document.getElementById("recurrent-event-end-date").disabled = true;
    document.getElementById("recurrent-event-time-selector").disabled = true;
    document.getElementById("daily-recurrent-freq").disabled = true;
  }
}

function restartEventFields(){
    //Disable everything again
    document.getElementById("event-name").disabled = false;
    document.getElementById("event-location").disabled = true;
    document.getElementById("all-day-event-checkbox").disabled = true;
    document.getElementById("all-day-event-date").disabled = true;
    document.getElementById("event-start-date").disabled = true;
    document.getElementById("event-end-date").disabled = true;
    document.getElementById("recurrent-event-type-selector").disabled = true;
    document.getElementById("create-event-button").disabled = true;
    //If the "Custom" option is chosen for the repeat selection menu
    document.getElementById("recurrent-event-end-date").disabled = true;
    document.getElementById("recurrent-event-time-selector").disabled = true;
    document.getElementById("daily-recurrent-freq").disabled = true;

    //Reset everything back to the placeholder value or empty value
    document.getElementById("event-name").value = ''; 
    document.getElementById("event-location").value = '';
    document.getElementById("event-start-date").value = '';
    document.getElementById("event-end-date").value = '';
    document.getElementById("recurrent-event-type-selector").value = 'none';
    document.getElementById("all-day-event-date").value = '';

    time = 0;
    totalTime = setInterval( function(){ timer()}, 1000 );
}
// function eventCreated(){
//     clearInterval(totalTime);
//     console.log("My time: " + time);
// }

function timer(){
    time = time + 1;
    console.log(time);
}