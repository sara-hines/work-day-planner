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
    eventText: $.trim(nineEvent.text), 
    event: nineEvent
  },
  {
    time: tenAm.text, 
    eventText: $.trim(tenEvent.text), 
    event: tenEvent
  },
  {
    time: elevenAm.text, 
    eventText: $.trim(elevenEvent.text),
    event: elevenEvent
  },
  {
    time: twelvePm.text, 
    eventText: $.trim(twelveEvent.text),
    event: twelveEvent
  },
  {
    time: onePm.text, 
    eventText: $.trim(oneEvent.text), 
    event: oneEvent
  },
  {
    time: twoPm.text, 
    eventText: $.trim(twoEvent.text), 
    event: twoEvent
  },
  {
    time: threePm.text, 
    eventText: $.trim(threeEvent.text), 
    event: threeEvent
  },
  {
    time: fourPm.text, 
    eventText: $.trim(fourEvent.text),
    event: fourEvent
  },
  {
    time: fivePm.text, 
    eventText: $.trim(fiveEvent.text), 
    event: fiveEvent
  },
]


// Let's write an event listener which will call the function to save the event to local storage once the save button is clicked. Let's try it for just 1 time block, and we can see if we can .each it later. Actually, we could grab all the save buttons by class, but then how would jQuery know to save whatever is in the event in a way that it's still associated with that particular time block? Well, let's try it. 

var saveBtns = $(".saveBtn");
// console.log(saveBtns);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var today = dayjs();
  renderEvent();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  saveBtns.on("click", function () {
    for (i = 0; i < events.length; i++) {
      var events = {
        time: events[i].time, 
        eventText: events[i].eventText
      }
    }
    localStorage.setItem("events", JSON.stringify(events));
    renderEvent();
  });

  // I also tried the below, which was throwing some sort of syntax error.
  // $(saveBtns).click.(function() {
  //   for (i = 0; i < $(events).length; i++) {
  //     var events = {
  //       time: events[i].time, 
  //       eventText: events[i].eventText
  //     }
  //   }
  //   localStorage.setItem("events", JSON.stringify(events));
  //   renderEvent();
  // });


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // var currentHour = today.format("H");
  var currentHour = 9;
  console.log(currentHour);
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

  if (currentHour > 1) {
    oneEvent.addClass("past");
  } else if (currentHour == 1) {
    oneEvent.addClass("present");
  } else {
    oneEvent.addClass("future");
  }

  if (currentHour > 2) {
    twoEvent.addClass("past");
  } else if (currentHour == 2) {
    twoEvent.addClass("present");
  } else {
    twoEvent.addClass("future");
  }

  if (currentHour > 3) {
    threeEvent.addClass("past");
  } else if (currentHour == 3) {
    threeEvent.addClass("present");
  } else {
    threeEvent.addClass("future");
  }

  if (currentHour > 4) {
    fourEvent.addClass("past");
  } else if (currentHour == 4) {
    fourEvent.addClass("present");
  } else {
    fourEvent.addClass("future");
  }

  if (currentHour > 5) {
    fiveEvent.addClass("past");
  } else if (currentHour == 5) {
    fiveEvent.addClass("present");
  } else {
    fiveEvent.addClass("future");
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  function renderEvent() {
    var storedEvents = JSON.parse(localStorage.getItem("events"));
    console.log(storedEvents);
    if (storedEvents !== null) {
      for (i = 0; i < storedEvents.length; i++) {
        events[i].event.text = storedEvents.eventText;
      }
    }
  }

  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(today.format("dddd, MMMM D"));
});
