console.log("This file was upload successfuly");

/**********************************************************************
 * Question 1 - from Lessons 1 and 2
 * Resize the width of the first image on the page to 100
 * Create an array of three strings; ‘window’, ‘document’, and ‘console’.
 * Store this array in a global variable called questionOne
 * *******************************************************************/

let firstImg = document.images[0];
firstImg.width = 100;
let questionOne = ["windows", "document", "console"];

/**********************************************************************
 * Question 2 - from Lesson 2
 * Write all the JavaScript code (do not use jQuery) necessary to do the following:
 * Change the text color of all <h1> elements on the page to red, unless they contain the class “special”.
 * To check whether an element contains the class “special”,
 * you may use either the .className property, or the .classList array
 * *******************************************************************/
let h1s = document.querySelectorAll("h1");

for (let h1 of h1s) {
  if (!h1.className.toLowerCase().includes("special")) {
    h1.style.color = "red";
  }
}

/*********************************************************************
 * Question 3 - from Lessons 2 and 3
 * Write all the JavaScript code (do not use jQuery) necessary to do the following:
 * Loop through all of a page’s links. If a link’s href attribute contains the word ‘bcit’,
 * remove the default underline from the link.
 *
 * Write a function called questionThree that accepts a single parameter (this parameter can be
 * named whatever you like, but the value passed in will be a number).
 * Inside the function, check if the value of the parameter is greater
 * than or equal to 60. If it is greater than or equal to 60, return true
 * (i.e. return the keyword ‘true’), else return false
 */

let links = document.querySelectorAll("a");

for (let link of links) {
  if (link.href.includes("bcit")) {
    link.style.textDecoration = "none";
  }
}

function questionThree(value) {
  return value >= 60;
}

/**********************************************************************************
 * Question 4 - from Lesson 3
 * Write all the JavaScript code (you may use jQuery) necessary to do the following
 *
 * -For each paragraph on the page, assign an onclick event handler that
 * adds class ‘clicked’ to only the element that was clicked
 * (i.e. clicking one paragraph should not cause the class to be added to all paragraphs)
 *
 *
 * For each paragraph on the page, assign an ondblclick event handler that
 * changes the font style of the element that was double-clicked to italic
 * (for this, use style.fontStyle = ‘italic’). As with the first part above,
 * ensure that double-clicking one paragraph does not cause the style to be
 * added to all paragraphs
 */

for (let p of document.querySelectorAll("p")) {
  p.ondblclick = function() {
    this.style.fontStyle = "italic";
  };
}

/*********************************************************************************
 * Question 5 - from Lesson 4
 * Write all the code necessary (do not use jQuery) to do the following
 * Part 1:
 * Create a function called questionFive that sets a timeout. This timeout
 * (i.e. do not use setInterval) should set the inner html of the element with
 * id ‘target’ to the string “Complete!” after a delay of 5 seconds
 *
 *
 * Part 2:
 * Fetch data from https://jsonplaceholder.typicode.com/users using the
 * Create a function called useData with no parameters
 * Inside your useData function, you will be able to access the JSON array of users
 * through the window.users property.
 * Each user has a ‘username’ property – get the username of the
 * 9th user and store it in the inner html of the element with id ‘user'
 *
 */
function questionFive() {
  setTimeout(function() {
    document.querySelector("#target").innerHTML = "Complete";
  }, 5000);
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(res => {
    window.users = res;
    useData();
  });

function useData() {
  for (let user of window.users) {
    if (user.id === 9) {
      document.querySelector("#user").innerHTML = user.username;
    }
  }
}

/*****************************************************************
 * Question 6 - from Lesson 5
 *
 * Using DOM scripting (i.e. document.createElement(), .appendChild())
 * create the following elements (in order):
 *
 * 1. An H2 element, with text node inside it containing the text ‘DOM Scripting’
 *
 * 2. A div, with style.width and style.height both set to 200px, and red background
 *
 * 3. An image, inside the paragraph with src ‘a.jpg’ and ID ‘img3’
 *
 */

let h2 = document.createElement("h2");
h2.appendChild(document.createTextNode("DOM Scripting"));
document.body.appendChild(h2);

let div = document.createElement("div");
div.style.width = "200px";
div.style.height = "200px";
div.style.backgroundColor = "red";
document.body.appendChild(div);

let p = document.createElement("p");
let img = document.createElement("img");
img.src = "a.jpg";
img.id = "img3";
p.appendChild(img);
document.body.appendChild(p);

/*******************************************************************************
 * Question 7 - from Lesson 6
 * Show all the JavaScript code (do not use jQuery) necessary to do the following
 *
 * Write a function called questionSeven that returns a Book literal object
 * (do not use an ES6 class). This Book object must have fields for:
 *
 * title - data type ‘string’ (e.g. “The Art of the Deal”)
 * author - data type ‘string’ (e.g. “Donald Trump”)
 * yearPublished - data type ‘number’ (e.g. 1987)
 *
 * a function/method called readBook, which returns a string (e.g. “I know words... I have the best words”)
 *
 */

function questionSeven() {
  return (book = {
    title: "JavaScript: The Definitive Guide",
    author: "David Flanagan",
    yearPublished: 2011
  });
}

function readBook() {
  return "javascript rocks";
}
