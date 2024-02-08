var rootEl = $("#root");
var nineAm = $("#nine-am");
var tenAm = $("#ten-am");
var elevenAm = $("#eleven-am");
var twelvePm = $("#twelve-pm");
var onePm = $("#one-pm");
var twoPm = $("#two-pm");
var threePm = $("#three-pm");
var fourPm = $("#four-pm");
var fivePm = $("#five-pm");

var allEvents = $("textarea");
var nineEvent = $("#nine-event");
var tenEvent = $("#ten-event");
var elevenEvent = $("#eleven-event");
var twelveEvent = $("#twelve-event");
var oneEvent = $("#one-event");
var twoEvent = $("#two-event");
var threeEvent = $("#three-event");
var fourEvent = $("#four-event");
var fiveEvent = $("#five-event");

// I'm not sure if I'll need the below one.
var timeBlocks = $(".time-block");
console.log(timeBlocks);
var saveBtns = $(".saveBtn");

// I may delete the below, it may end up being duplicate. These are for the save buttons.
var nineBtn = $("#nine-btn");
var tenBtn = $("#ten-btn");
var elevenBtn = $("#eleven-btn");
var twelveBtn = $("#twelve-btn");
var oneBtn = $("#one-btn");
var twoBtn = $("#two-btn");
var threeBtn = $("#three-btn");
var fourBtn = $("#four-btn");
var fiveBtn = $("#five-btn");


var events = [
  {
    time: nineAm.text, 
    eventText: nineEvent.val(),
    event: nineEvent, 
    btn: $("#nine-btn") 
  },
  {
    time: tenAm.text, 
    eventText: tenEvent.val(),
    event: tenEvent,
    btn: $("#ten-btn")
  },
  {
    time: elevenAm.text, 
    eventText: elevenEvent.val(),
    event: elevenEvent,
    btn: $("#eleven-btn")
  },
  {
    time: twelvePm.text, 
    eventText: twelveEvent.val(),
    event: twelveEvent,
    btn: $("#twelve-btn")
  },
  {
    time: onePm.text, 
    eventText: oneEvent.val(), 
    event: oneEvent, 
    btn: $("#one-btn")
  },
  {
    time: twoPm.text, 
    eventText: twoEvent.val(), 
    event: twoEvent, 
    btn: $("#two-btn")
  },
  {
    time: threePm.text, 
    eventText: threeEvent.val(),
    event: threeEvent, 
    btn: $("#three-btn")
  },
  {
    time: fourPm.text, 
    eventText: fourEvent.val(),
    event: fourEvent,
    btn: $("#four-btn")
  },
  {
    time: fivePm.text, 
    eventText: fiveEvent.val(),
    event: fiveEvent, 
    btn: $("#five-btn")
  },
]

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

function getEventsFromStorage() {
  var storedEvents = localStorage.getItem("storedEvents");
  if (storedEvents) {
    storedEvents = JSON.parse(storedEvents);
  } else {
    storedEvents = {};
  }
  return storedEvents;
};

function saveEventsToStorage(storedEvents) {
  localStorage.setItem("storedEvents", JSON.stringify(storedEvents));
};

function printEvents() {
  $(allEvents).empty();
  var storedEvents = getEventsFromStorage();
  console.log(storedEvents);
  for (var i = 0; i < storedEvents.length; i++) {
    var storedEvents = storedEvents[i];
    // This is the part where we're actually trying to print the event to the page after it's been saved and retrieved from local storage. At this point, we hope that storedEvents[i] is one object out of the array of objects which was storedEvents, and we intend to set storedEvents to be storedEvents[i] so that we can handle each event that needs to be printed separately and use dot notation to grab and print it.
    $(document.body.children[0].children[i].children[1].val(storedEvents.event));
  }
}

function handleSaveEvents(event) {
  event.preventDefault();
  console.log(event.target);
  console.log(event.target.id);
  var storedEvents = getEventsFromStorage();
  const timeEl = "#" + event.target.id.split("-")[0] + "-event";
  // console.log($(timeEl).val());
  // console.log(timeEl);
  // console.log($(document.body.children[0].children[i].children[1].val().trim()));
  // for (var i = 0; i < 9; i++) {
    // var newEvent = {
      // hour: document.body.children[0].children[i].children[0].text(),
      
      storedEvents[event.target.id] = $(timeEl).val()
      // saveBtn: document.body.children[0].children[i].children[2]
    // }
    // storedEvents.push(newEvent);
    saveEventsToStorage(storedEvents);

    // printEvents();
  // }
};

// I would like to make an event listener here to listen for a click on the appropriate save button and make sure to keep the save button associated with only the event for its time block, and cause only the event for that time block to be saved. But, I'm a little lost and not sure how to do that. 
saveBtns.on("click", handleSaveEvents);

printEvents();


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D"));
});
