const products=[];
exports.getAddproduct={req,res,next}=>{
    res.render('add-products',{
        pageTitle:'Add products',
        path:'/admin/add-product',
        formsCSS:true,
        productCSS:true,
        activeAddproduct:true
    });
};
exports.postAddProduts=(req,res,next)=>{
    products.push({title:req.body.title});
    res.redirect('/');
}

    
