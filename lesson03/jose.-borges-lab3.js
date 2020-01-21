//part 01
//Create an array named colors and fill it with three strings representing colors of your choosing,
//e.g. ‘blue’, ‘green’, ‘red’
let colors = ['blue','green','red']


//Part 2
/*Using JavaScript (no jQuery), each paragraph in div2 must independently have its
background color changed when the mouse is hovering over it (i.e. it must change back to
white when the mouse is no longer over the particular paragraph).

The background colors must be taken from your colors array, and must be set in order. That is,
the first paragraph will have its background color set to the first color in the colors array, the
second paragraph must have its background color set to the second color in the array, and so
on.*/

let defaultColor = function () {
  this.style.color = 'black';
}
let changeColor = function ()
{
console.log(this)
   let indexofP ;
   if (this.id == "p1")
   {
       indexofP = 0
   } else if(this.id == "p2")
   {
    indexofP = 1;
   }else
   {
     indexofP = 2;
   }


   this.style.color = colors[indexofP];
}

let allP = document.querySelectorAll('p');

for (const p of allP) {
    p.onmouseenter = changeColor;
    p.onmouseleave = defaultColor;
}


