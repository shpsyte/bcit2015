console.log("This file is imported fo HTML");

/* ******************************************************************************************************|
 * Part 1
 * a.Create an empty array called 'images' - it will later contain strings that are urls to images, i.e.
 *   http://somesite.com/slide0.jpg
 * b.Use the fetch() function to retrieve an array of json objects from http://comp2015.herokuapp.com/images
 * and pass it to a named function (name this function
 *   whatever you like)
 * c.Inside your named function, loop through the array of json objects(accessing the
 * appropriate object properties) and push the image urls into your images array
 * d.Once you have verified that your image array contains the correct data, proceed to part 2
 *********************************************************************************************************/
let $d = document;

let images = [];
let url = "http://comp2015.herokuapp.com/images";

// Load img
var LoadImgIntoArray = data => (images = data);

// fetching data
fetch(url)
  .then(request => request.json())
  .then(data => LoadImgIntoArray(data));

// Part 2
/* ******************************************************************************************************|
 * Get references(i.e.variables) to the following elements:
 * a) the img inside the div with class 'slides' - use document.querySelector()-- > e.g. querySelector('#div1 p')
 * b) the button with id ‘start'
 * c) the button with id ‘stop'
 * Next, create two more variables:
 * d) a variable called 'currentSlide' to hold the index of the current slide.Give it an initial value of
 * zero
 * e) a variable called 'timer' that is initially set to null
 *********************************************************************************************************/

let img = $d.querySelector(".slides img");
let start = $d.querySelector("#start");
let stop = $d.querySelector("#stop");
let currentSlide;
let timer = null;

// Part 3
/* ******************************************************************************************************|
 * Create a function called advanceSlides(this is the equivalent of the animate() function from this
 * weeks notes).This function should:
 * a) check IF the value of currentSlide is less than the length of your images array - 1
 *   If so, increment the value of currentSlide and use that value to index into your images array to
 *    grab a filename.Use that filename to set the src attribute of the image you got from step 2 - a
 * b) ELSE, set the value of currentSlide back to zero and update the src attribute of your image
 *    as above
 **********************************************************************************************************/

function advanceSlides() {
  currentSlide < images.length - 1 ? currentSlide++ : (currentSlide = 0);
  let filename = images[currentSlide];
  img.src = filename.url;
}

// Part 4
/* ******************************************************************************************************|
 * Create two event handlers, for start.onclick and stop.onclick
 * The function assigned to start.onclick should check IF the timer variable is null.If so, set an
 * interval that calls the advanceSlides function every 3 seconds(make sure to assign the return
 * value of setInterval to your timer variable!).
 *
 * The function assigned to stop.onclick should check IF the timer variable is not null.If it is not
 * null, clear the interval and set timer back to null
 **********************************************************************************************************/

var animate = () => {
  advanceSlides();
};

let id = null;
start.addEventListener("click", () => {
  if (id === null) {
    animate();
    id = setInterval(animate, 3000);
  }
});

stop.addEventListener("click", () => {
  if (id !== null) {
    clearInterval(id);
    id = null;
  }
});

// Part 5
/* ******************************************************************************************************|
 * Test your page by manually add class ‘mobile’ to the body tag.You will notice when you reload the page
 * that the menu is now displayed as a mobile - style menu rather than displaying the title and all the links.
 * Now remove your hard coded class.
 *
 * Using javascript, check how wide the window is when the page loads – if it is smaller than 600px, add
 * class ‘mobile’ to the body. Once completed, you should be able to reload the page and see a mobile
 * style window(if the page is smaller than 600px) or a desktop menu if the page is larger than 600px.Try
 * shrinking the width and reloading, then widening the window and reloading again to see if you are
 * getting the correct results
 **********************************************************************************************************/
let mobile = wide => {
  if (wide < 600) {
    $d.body.classList.add("mobile");
  } else {
    $d.body.classList.remove("mobile");
  }
};
mobile(window.innerWidth);

// Part 6
/* ******************************************************************************************************|
 * Add a resize listener to the window, to allow the same behaviour when the browser is manually resized,
 *   i.e.the correct menu should appear on page load, but the menu should also now switch back and forth
 * when the browser is physically resized
 **********************************************************************************************************/
window.addEventListener("resize", () => mobile(window.innerWidth));
