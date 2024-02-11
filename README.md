# Work Day Planner | Local Storage & Third Party APIs

## Description

This Work Day Planner app uses local storage, jQuery, Day.js, Bootstrap, and of course, JavaScript, CSS, and HTML to provide a convenient way to schedule and save events for a 9am - 5pm work day. During the creation of this project, it was evident how useful libraries, third party APIs, CSS frameworks, and other tools can be for simplifying tasks and accessing rich resources which would otherwise be unavailable.

As I expand my toolset and building upon my skills in development, I am learning to approach problems from different angles, and am using objects, functions, event listeners, and even unassuming string methods in new ways. Different applications of local storage are also proving to be opportunities for better understanding JavaScript functions. This work day planner has helped further my understanding of appropriate scenarios for passing a function, calling a function, passing a parameter to a function, and passing a function as a parameter to another function. 

The most important feature of this particular app is its relavence and usefulness for everyday life. The product of incorporating quite a few tools and libraries is a calendar which: dynamically displays the current date; color codes hours of the workday based on whether they have passed, are the current hour, or are in the future; and allows the user to input, save, and view their own events for each hour of the day. Since calendar apps are so widely and so often used throughout the day, it is a very relavent skill to be able to replicate and build upon the functionality of a basic workday calendar.

## Installation

No installation is required to use this application.

## Usage & Features

When the user navigates to the application at https://sara-hines.github.io/work-day-planner, it will have an appearance similar to the below: 

![img1](https://github.com/sara-hines/work-day-planner/assets/90005274/bfa150d5-f1c7-4c22-8fe2-8d9c163083bf)

The current date is displayed under the title and heading. Time blocks for the hours from 9am - 5pm appear below, with the hour of the time block appearing on the left and a save button appearing just to the right of the block where text is entered. After the user enters the text for their event in the corresponding time block and clicks the save button, the event will be saved to local storage. When the user hovers over the save icon within the save button, the icon enlarges and changes color, helping to guide the user interaction. The save button for 9am in its hover state can be viewed below: 

![img2](https://github.com/sara-hines/work-day-planner/assets/90005274/d560f1e8-7e5c-4ae0-8b72-9daa50f2216b)

After clicking the save button, the text "Appointment added to local storage ✅" will briefly appear beneath the date. This can be viewed in the below screenshot. 

![img3](https://github.com/sara-hines/work-day-planner/assets/90005274/467f2ba6-a760-492c-a9f4-82abab9a999f)

If the user refreshes the page, leaves the page, or closes the browser, upon returning, the saved events will still be displayed on the calendar. Depending on the current hour of the day, time blocks which have passed will have a grey background color, the current hour will have a red background color, and future time blocks will have a green background color. An example of saved events, with color coding assuming that the current hour is 12pm, can be viewed below. 

![img4](https://github.com/sara-hines/work-day-planner/assets/90005274/52922787-3907-4e82-8dd2-4dbf9de649a6)

## Credits & Citations

Many thanks to my instructor Stephen Woosley and teaching assistant Nick S., who helped to troubleshoot issues I was having with causing local storage persist, and guided the use of a string method where I hadn't considered how helpful it would be. They also helped me to start using bracket notation to work with object key value pairs in a dynamic way. I so appreciate Stephen and Nick's guidance!

Squash Labs. (2023, October 13). How to Get an Object Value by Dynamic Keys in TypeScript. Squash; Squash Labs Inc. https://www.squash.io/tutorial-getting-object-value-by-dynamic-key-in-typescript/

Stack Overflow. (2016, March 22). jQuery fadeOut without display none? Stack Overflow; Stack Exchange Inc. https://stackoverflow.com/questions/4549389/jquery-fadeout-without-display-none

Stack Overflow. (2014, January 28). jQuery .val() not working for input fields. Stack Overflow; Stack Exchange Inc. https://stackoverflow.com/questions/21407017/jquery-val-not-working-for-input-fields (Referenced to help figure out how to successfully get and set value using .val(). The .val() method works on input elements which have a name attribute and value added.)

Stack Overflow. (2017, August 15). Prevent child elements from being the target when parent element is clicked. Stack Overflow; Stack Exchange Inc. https://stackoverflow.com/questions/45697607/prevent-child-elements-from-being-the-target-when-parent-element-is-clicked (I referenced T.J. Crowder's Aug 15, 2017 suggestion to use event.currentTarget instead of event.target to prevent child elements from being the target when parent element is clicked. I used this for the \<button> elements with the \<i> elements within which were sometimes becoming event.target.)

## License

This project is licensed under the [MIT license](https://opensource.org/license/mit/). The license can be accessed in the repository. 

