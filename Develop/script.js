// I HAVE NOT COMMITTED THESE CHANGES YET

var rootEl = $("#root");
// The below works and is valid jQuery
// rootEl.append("<h2>This is an h2 I just created</h2>");

var nineAm = $("#nine-am");
var tenAm = $("#ten-am");
var elevenAm = $("#eleven-am");
var twelvePm = $("#twelve-pm");
var onePm = $("#one-pm");
var twoPm = $("#two-pm");
var threePm = $("#three-pm");
var fourPm = $("#four-pm");
var fivePm = $("#five-pm");

var nineEvent = $("#nine-event");
var tenEvent = $("#ten-event");
var elevenEvent = $("#eleven-event");
var twelveEvent = $("#twelve-event");
var oneEvent = $("#one-event");
var twoEvent = $("#two-event");
var threeEvent = $("#three-event");
var fourEvent = $("#four-event");
var fiveEvent = $("#five-event");

var events = [
  {
    time: nineAm.text, 
    event: nineEvent.text,
  },
  {
    time: tenAm.text, 
    event: tenEvent.text,
  },
  {
    time: elevenAm.text, 
    event: elevenEvent.text, 
  },
  {
    time: twelvePm.text, 
    event: twelveEvent.text,
  },
  {
    time: onePm.text, 
    event: oneEvent.text,
  },
  {
    time: twoPm.text, 
    event: twoEvent.text,
  },
  {
    time: threePm.text, 
    event: threeEvent.text,
  },
  {
    time: fourPm.text, 
    event: fourEvent.text, 
  },
  {
    time: fivePm.text, 
    event: fiveEvent.text, 
  },
]

renderEvent();


// Let's write an event listener which will call the function to save the event to local storage once the save button is clicked. Let's try it for just 1 time block, and we can see if we can .each it later. Actually, we could grab all the save buttons by class, but then how would jQuery know to save whatever is in the event in a way that it's still associated with that particular time block? Well, let's try it. 

var saveBtns = $(".saveBtn");
// console.log(saveBtns);
saveBtns.on("click", function () {
  localStorage.setItem("events", JSON.stringify(events));
  renderEvent();
})








// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



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
});
