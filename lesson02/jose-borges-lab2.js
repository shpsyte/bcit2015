// Part 01
//Alert the current time, formatted as hours:minutes, when the page loads. Examples would look
//like 12:35, 9:10, 1:45

let now = new Date();
let hr = now.getHours();
let mn =now.getMinutes();
let msg = `${hr}:${mn}`
alert(msg)


//Part 02
//Create an array and fill it with at least six usernames (i.e. “Sophia”, “Gabriel”, …) then loop
//through them with a for loop. If a username contains the letter “i” then alert the username.

let usernames = ["Smith","Eva","Albert","Alexi","Mint","Ubuntu"]

for (let username of usernames)
{
    if (username.toLocaleLowerCase().includes("i"))
    {
        alert(` The username ${username} contains i...`)
    }

}

//Part 3
//Use DOM 0 ( e.g. document.images ) to change the CSS style of the links so that every link
//has its default underline removed (use the CSS text-decoration property for this).

let allLinks = document.links;

for(link of allLinks)
{
    link.className = "boxhead";
}
