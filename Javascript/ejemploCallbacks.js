function suma(n1, n2, callBack){
    var resultado = n1 + n2;
    callBack(resultado);
}

suma(1,5,function(res){
    console.log(res);
});