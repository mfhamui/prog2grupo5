let productController = {
    index : function(req,res){
        return res.render('index')
    },
    product_add: function(req,res){
        return res.render('product-add')
    },
    product: function(req,res){
        return res.render('product')
    },
    search_result: function(req,res){
        return res.render('search-results')
    },
    login: function(req,res){
        return res.render('login')
    },
    register: function(req,res){
        return res.render('register')
    }, 
    profile: function(req,res){
        return res.render('profile')
    },


}

module.exports = productController;