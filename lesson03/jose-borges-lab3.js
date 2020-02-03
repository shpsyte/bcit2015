//part 01
//Create an array named colors and fill it with three strings representing colors of your choosing,
//e.g. ‘blue’, ‘green’, ‘red’
let colors = ["blue", "green", "red"];

//Part 2
/*Using JavaScript (no jQuery), each paragraph in div2 must independently have its
background color changed when the mouse is hovering over it (i.e. it must change back to
white when the mouse is no longer over the particular paragraph).

The background colors must be taken from your colors array, and must be set in order. That is,
the first paragraph will have its background color set to the first color in the colors array, the
second paragraph must have its background color set to the second color in the array, and so
on.*/

let defaultColor = function() {
  this.style.color = "black";
};

let changeColor = function(e) {
  let index = this.id - 1; // the name of element is 1,2,3
  this.style.color = colors[index];
};

for (const p of document.querySelectorAll("#div2 p")) {
  p.onmouseenter = changeColor;
  p.onmouseleave = defaultColor;
}

// Part 3
// Using either JavaScript or jQuery, you must change the height of div1 to 200px when the
// button with id toggle is clicked.

// If you are interested in animating the height change, take a look at CSS transitions(https://
//   developer.mozilla.org / en - US / docs / Web / CSS / CSS_Transitions / Using_CSS_transitions) and look
// at assignment1.css for an example.This is not required for the lab!

// let btn = document.querySelector("#toggle");
// btn.addEventListener("click", function() {
//   // console.log("clicked");
// });

$("#toggle").bind("click", function() {
  let div = document.querySelector("#div1");
  // div.classList.add("delay");
  div.style.height = "200px";
});
