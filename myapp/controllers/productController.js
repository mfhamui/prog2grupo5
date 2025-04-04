let productController = {
    index : function(req,res){
        return res.render('index')
    },
    product_add: function(req,res){
        return res.render('product-add')
    },
    product: function(req,res){
        return res.render('product-add')
    },
    search_result: function(req,res){
        return res.render('product-add')
    },

}

module.exports = productController;