
// Part 1
window.onload = function () {
// Part 2
    let firstname = prompt('Please type your First Name...');
    let lastname = prompt('Please type your Last Name...');

    console.log(`Welcome ${firstname} ${lastname}.`)

// Part 3
    // clientWidth, offsetWidth 
    /*
      clientWidth: (inner width) Is the space inside a element including padding and excluding borders and scrollbars 
      offsetWidth: (outer width) Is the space occupied by the element including padding and borders space


      ------------------------------
      The data types that width and style.width accept are:
      width: Number 
      style.width: String

    */
   

// Part 4
    let originalWithImg1 = document.getElementById('img1').clientWidth;
    let img2 = document.getElementById('img2').width = originalWithImg1;
    let img3 = document.getElementById('img3').width = originalWithImg1;

    
}