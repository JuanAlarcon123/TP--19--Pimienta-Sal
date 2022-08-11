const products = require('../data/products')

module.exports = {

    detail : (req,res) => {
    
        let product = products.find ((product)=> {
            return product.id === +req.params.id /* en una variable, recorro cada elemento y le pido que ese elemento.id tenga por valor lo que me viene por parametro en la ruta */
        })
      /*   return res.send(product)  */  /* dentro de producto, el id esta determinado por lo que pongo en params */
        return res.render('detalleMenu', {
            title : 'detalle',
            product
            
        })
    }
}