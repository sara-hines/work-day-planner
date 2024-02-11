// The below variables store selections of the input elements where event text is entered by the user.
var nineEvent = $("#nine-event");
var tenEvent = $("#ten-event");
var elevenEvent = $("#eleven-event");
var twelveEvent = $("#twelve-event");
var oneEvent = $("#one-event");
var twoEvent = $("#two-event");
var threeEvent = $("#three-event");
var fourEvent = $("#four-event");
var fiveEvent = $("#five-event");
// The below saveBtns variable stores a selection of all of the save buttons using the class .saveBtn.
var saveBtns = $(".saveBtn");
// The variable savedConfirmation selects and stored the <p> element which will be used to display the message, "Appointment added to local storage ✅" when the user clicks the save button to save an event.
var savedConfirmation = $("#saved-confirmation");


// The current day is accessed via day.js and reformatted to display the day of the week, full month, and day of the month in the appropriate <p> element. 
var today = dayjs();
$(function () {
  $("#currentDay").text(today.format("dddd, MMMM D"));
});
// The current hour is accessed by reformatting day.js's "today" into the hour in military time. 
var currentHour = today.format("H");


// The "past" class adds a gray background color, the "present" class adds a red background color, and the "future" class adds a green background color. For each time block, the current hour in real time is compared to the hour of the respective time block. If the current hour is greater than the hour of the time block, the time block has passed and is color coded grey. If the current hour is equal to the hour of the time block, the time block is in the present and is color coded red. If the current hour is less than the hour of the time block, the time block is in the future and is color coded green.
if (currentHour > 9) {
  nineEvent.addClass("past");
} else if (currentHour == 9) {
  nineEvent.addClass("present");
} else {
  nineEvent.addClass("future");
}

if (currentHour > 10) {
  tenEvent.addClass("past");
} else if (currentHour == 10) {
  tenEvent.addClass("present");
} else {
  tenEvent.addClass("future");
}

if (currentHour > 11) {
  elevenEvent.addClass("past");
} else if (currentHour == 11) {
  elevenEvent.addClass("present");
} else {
  elevenEvent.addClass("future");
}

if (currentHour > 12) {
  twelveEvent.addClass("past");
} else if (currentHour == 12) {
  twelveEvent.addClass("present");
} else {
  twelveEvent.addClass("future");
}

// For 1PM and the subsequent hours through 5PM, note that the military time equivalent is used to identify the time block. Using military time for each time block allows us to easily distinguish between the AM and PM of any given time and maintain accuracy of the color coding.
if (currentHour > 13) {
  oneEvent.addClass("past");
} else if (currentHour == 13) {
  oneEvent.addClass("present");
} else {
  oneEvent.addClass("future");
}

if (currentHour > 14) {
  twoEvent.addClass("past");
} else if (currentHour == 14) {
  twoEvent.addClass("present");
} else {
  twoEvent.addClass("future");
}

if (currentHour > 15) {
  threeEvent.addClass("past");
} else if (currentHour == 15) {
  threeEvent.addClass("present");
} else {
  threeEvent.addClass("future");
}

if (currentHour > 16) {
  fourEvent.addClass("past");
} else if (currentHour == 16) {
  fourEvent.addClass("present");
} else {
  fourEvent.addClass("future");
}

if (currentHour > 17) {
  fiveEvent.addClass("past");
} else if (currentHour == 17) {
  fiveEvent.addClass("present");
} else {
  fiveEvent.addClass("future");
}


// The below function retrieves and returns any events in localStorage (parsing, as the events would have previously been stringified in order to store them). If there are no events saved in localStorage, an empty object will be returned.
function getEventsFromStorage() {
  var storedEvents = localStorage.getItem("storedEvents");
  if (storedEvents) {
    storedEvents = JSON.parse(storedEvents);
  } else {
    storedEvents = {};
  }
  return storedEvents;
};


// The saveEventsToStorage function stringifies storedEvents (since only the string data type can be saved to localStorage) and saves the result to localStorage under the name "storedEvents".
function saveEventsToStorage(storedEvents) {
  localStorage.setItem("storedEvents", JSON.stringify(storedEvents));
};


// function printEvents takes in the storedEvents returned in the getEventsFromStorage function and sets the value of each input element to be the text that the user had entered. In the handleSaveEvents function, the text the user enters for a time block is saved to storedEvents using the id of the time block's button as the key. So, we can access the text entered by the user for a time block by using bracket notation and respective button element's id as the key.
function printEvents(storedEvents) {
  var storedEvents = getEventsFromStorage();
  $("#nine-event").val(storedEvents["nine-btn"]);
  $("#ten-event").val(storedEvents["ten-btn"]);
  $("#eleven-event").val(storedEvents["eleven-btn"]);
  $("#twelve-event").val(storedEvents["twelve-btn"]);
  $("#one-event").val(storedEvents["one-btn"]);
  $("#two-event").val(storedEvents["two-btn"]);
  $("#three-event").val(storedEvents["three-btn"]);
  $("#four-event").val(storedEvents["four-btn"]);
  $("#five-event").val(storedEvents["five-btn"]);
}


// Once the user clicks a save button, function handleSaveEvents takes in the click event and accesses the storedEvents from the getEventsFromStorage function. Function handleSaveEvents also constructs the id for the appropriate time block / input element (by using the id of the save button that triggered the event, the split() method, and string concatenation). In order to keep the event text associated with its time block when it enters localStorage, the id of the save button which triggered the event is used as the key, and the event text is saved as the value of that key. storedEvents is then passed to the saveEventsToStorage function.
function handleSaveEvents(event) {
  event.preventDefault();
  var storedEvents = getEventsFromStorage();
  // timeEl is the id on the input element where the user saves the event. 
  const timeEl = "#" + event.currentTarget.id.split("-")[0] + "-event";
  // $(timeEl).val() is the text the user entered for the event.
  storedEvents[event.currentTarget.id] = $(timeEl).val()
  saveEventsToStorage(storedEvents);
  $("#saved-confirmation").animate({opacity: 1});
  $("#saved-confirmation").animate({opacity: 0});
};


// When a save button is clicked, function handleSaveEvents is passed. 
saveBtns.on("click", handleSaveEvents);


// The printEvents function is called to print the events (which were retrieved from localStorage) to the page.
printEvents();





