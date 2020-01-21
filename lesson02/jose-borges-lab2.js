// Part 01
//Alert the current time, formatted as hours:minutes, when the page loads. Examples would look
//like 12:35, 9:10, 1:45

let now = new Date();
let hr = now.getHours();
let mn = now.getMinutes();
let msg = `${hr}:${mn}`;
alert(msg);

//Part 02
//Create an array and fill it with at least six usernames (i.e. “Sophia”, “Gabriel”, …) then loop
//through them with a for loop. If a username contains the letter “i” then alert the username.

let usernames = ["Smith", "Eva", "Albert", "Alexi", "Mint", "Ubuntu"];

for (let username of usernames) {
  if (username.toLocaleLowerCase().includes("i")) {
     alert(` The username ${username} contains [i]...`);
  }
}

//Part 3
//Use DOM 0 ( e.g. document.images ) to change the CSS style of the links so that every link
//has its default underline removed (use the CSS text-decoration property for this).
var links = document.links

for (let link of links ) {
  link.style.textDecoration = "none";
}

//Part 4
// Use DOM 1(e.g.document.getElementsByTagName(‘img’)) to:
// – Add class ‘message’ to every div on the page.
// – Change the width of every div to 100px
// – Change the height of every div to 100px
//– OPTIONAL - inside the for loop, use the code below to generate three
//random values
//then, combine the variables into a string literal(as shown below) and set the CSS
//background color of a div to this value.Each of the six divs should then have //its own
//distinct color.
//`rgb(${r}, ${g}, ${b})`

let divs = document.querySelectorAll("div");

for (const div of divs) {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  let color = `rgb(${r}, ${g}, ${b})`;

  div.classList.add("message");
  div.style.width = "100px";
  div.style.height = "100px";

  div.style.backgroundColor = color;
}
