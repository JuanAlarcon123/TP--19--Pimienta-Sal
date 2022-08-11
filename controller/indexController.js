const products = require('../data/products')


module.exports ={
    index: (req, res) => {
       return res.render('index', { 
        title: 'home' ,
        products/* al tener el mismo nombre de la variable, no nesesito repetirla despues de los dos puntos */
    })
      }
}