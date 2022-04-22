// Add a click event to the button that disables the button and starts a counter.

// Count to 7 and update `span.count` with the value of the count.

// Once 7 is reached stop the count and enable the button.
let count = 0;
const counter = document.querySelector(".count");
const btn = document.querySelector("button");

btn.onclick = function () {
  this.disabled = true;
  let count = 0;
  const interval = setInterval(function () {
    count++;

    counter.innerHTML = count;
    if (count === 7) {
      clearInterval(interval);
      counter.innerHTML = count;
      btn.disabled = false;
    }
  }, 1000);

  //  counter.innerHTML = "";

  //   for (let i = 1; i <= 7; i++) {
  //     counter.innerHTML = i;

  //     if (i === 7) {
  //       this.disabled = false;
  //     }
  //   }
};

//      TEACHERS SOLUTION
// let counter = 0;
// const button = document.querySelector("button");
// const countContainer = document.querySelector(".count");

// button.onclick = function () {
//   event.target.disabled = true;

//   // reset counter
//   counter = 0;

//   const intervalId = setInterval(function () {
//     counter++; // add 1 to counter
//     countContainer.innerHTML = counter;

//     if (counter === 7) {
//       clearInterval(intervalId);
//       button.disabled = false;
//     }
//   }, 1000);
// };
