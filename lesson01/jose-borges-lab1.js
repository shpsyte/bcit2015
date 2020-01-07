window.onload = function () {
    // Part 2
    let firstname = prompt('Please type your firstname...');
    let lastname = prompt('Please type your lastname...');

    console.warn(`Welcome ${firstname} ${lastname},`)

    // Part 3
    // clientWidth, offsetWidth 
    /*
      clientWidth: (inner width) Is the space inside a element including padding and excluding borders and scrollbars 
      offsetWidth: (outer width) Is the space occupied by the element including padding and borders space

    */

    // Part 4
    let originalWithImg1 = document.getElementById('img1').with;
    let img2 = document.getElementById('img2').style.width = originalWithImg1;
    let img3 = document.getElementById('img3').style.width = originalWithImg1;

    
}