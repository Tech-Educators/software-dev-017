//We use timers to count time
//We set up tasks to be activated when the time runs out or after a specific amount of time

//Countdowns where an action happens when time reaches zero
//The method for this timer is setTimeout()
//This method needs two arguments: a function and a delay (milliseconds)
//The task will happen once!

// function timeoutTask() {
//   console.log("Test");
// }
// setTimeout(timeoutTask, delay);

setTimeout(function () {
  console.log("This message will appear in 3 seconds");
}, 3000);

// A timer that performs a task after a specific amount of time
//The method for this timer is setInterval()
//This method needs two arguments: a function, and a delay (milliseconds)
//The task repeats forever after each delay!
setInterval(function () {
  console.log("This message appears after 2 seconds");
}, 2000);

//To stop the interval we use another method: clearInterval()
const oneSecondInterval = setInterval(function () {
  console.log("This message appears after 1 second");
}, 1000);

//clearInterval() needs one argument --> the interval we want to stop

// clearInterval(oneSecondInterval);

//If we want to stop an interval after a specific amount of time, we can combine our interval with a timeout!
function timeoutToStopTheInterval() {
  //the task of the timeout is to stop the interval after 5 seconds
  setTimeout(function () {
    clearInterval(oneSecondInterval);
  }, 5000);
}
timeoutToStopTheInterval();

//Examples to try:
// you could change the background colour after 5 seconds
// you could add a heading after a specific amount of time
//you could add a paragraph every 3 seconds to remind the user of something
//you could display the actual time on the screen
