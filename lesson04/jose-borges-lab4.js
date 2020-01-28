 

fetch('https://comp2015.herokuapp.com/messages')
  .then(response =>  response.json())
  .then(json => print(json))



  function print(data) {
   for (const user of data) {
      console.log(` Hello from ${user.username} - ${user.message.body}`)
     
   }
    
  }
  
