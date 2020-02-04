let url = 'http://comp2015.herokuapp.com/images'


async function Get(params) {
  await fetch(url)
     .then(a => a.json())
     .then(a => processd(a))
    
}


 img = []

 function processd(a) {
     img = a
     console.log(img)
 }


 Get()

 console.log('Rodando aqui',img)

