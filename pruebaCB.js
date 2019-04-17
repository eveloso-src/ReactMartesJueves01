function operar(a,b,operador) {
    return operador(a,b);
}

let resultado = operar(3, 3, (z1,z2) => z1 !== z2);

function mostrarThis(param1, param2) {
    console.log(this);
    console.log(param1, param2);
}


mostrarThis.apply("TENGO QUE PASAR EL THIS", ["param 1", "param2"]);
mostrarThis.call("Otro this", "param111", "param222");

