function puedoComprar( edadUsuario ){
    if( edadUsuario >= 18){
        alert("Bienvenido a MILANO VINOS");
    }
    else if( edadUsuario < 18){
        alert("Prohibida la venta de alcohol a menores de 18 años");
    }
    else{
        alert("DATO INCORRECTO");
    }
}

function bienvenida(){
    let edad = prompt("Por favor ingrese su edad");
    edad = parseInt( edad );
    puedoComprar( edad );
}

bienvenida()