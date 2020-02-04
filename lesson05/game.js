let $ = document;

let  button = $.querySelector('input[type=submit]')
let preview = $.querySelector('#preview')
let todoText = $.querySelector("#todoText");


let resposta = ""
let typeinresposta = false;
 

onkeyup = () =>{
    let textinput = todoText.value

    


     if (textinput === ".")
     {
        if (typeinresposta)
          typeinresposta = false
        else
          typeinresposta = true
     }

     if (typeinresposta)
     {
         resposta = resposta + textinput
     } else{

         preview.innerHTML = todoText.value;
     }

    
}


