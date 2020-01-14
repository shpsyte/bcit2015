var $ = document;

function ChangeColorOfElement(element, color) {
    element.style.color = color;
}
 
let x = ["BCIT",1979,true];


x[13] = "Jose"

// x.push("Luiz")

 

 let n = [1,2,3,5,5,6,7,8,9]

 let ind = n.indexOf(5)

 

//  let aofP = $.querySelectorAll('p')

 

//   aofP.forEach(a => {
//     ChangeColorOfElement(a,'blue')
//  })

//  // for (let index = 0; index < aofP.length; index++) {
//     for (let index of aofP) {
//       ChangeColorOfElement(index,'blue')
     
//   }


let allLinks = document.links;

for(let link of allLinks)
{
    link.href = `https://www.google.com/search?q=${link.innerText}`
    link.target = '_blank';
}
  


let num = 10
if (num === "10")
    console.log(` Won't printed`)

// shortcut

let isTusday = false

if (!isTusday)
{
    console.log('Here?')
}

let date = new Date()
console.log(date.toLocaleDateString())