var $ = document;



const act = (element) =>  console.log('trigger',element.target) ;
 

// var allP = document.getElementsByTagName("p")

// for (const paragraph of allP) {
//     paragraph.onclick = act;
    
// }

var logId = () => {
    console.log(this.id)
}


for (const paragraph of $.querySelectorAll('p'))
{
  paragraph.onclick = logIdf;
}


function logIdf(){
    console.log(this.id)
}

console.log(parseInt("10px"));
console.log(parseInt("px10"));