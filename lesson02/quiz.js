
    // How to create an array
    let countries = ["canada","brazil"]
 



    // How to loop through an array
    for (const contry of countries)
    {
        console.log( contry)
    }


    // Know which methods come from DOM 0 and which methods come from DOM 1
    let links = document.links;
    let links2 = document.getElementsByTagName("a")

    console.log(links2)



    // Know how to determine the truth value of a complex conditional statement – HINT: remember your shortcuts
    //  T && T = T otherwise false
    //  F || F = F, otherwise true


    // How to search for items in an array
    var bra = countries.indexOf("brazil")

if (bra > 0)
    alert("brazil is is hte array")