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



class producto{
    constructor( id , nombre , variedad, bodega, precio , stock){
        this.id = id;
        this.nombre = nombre;
        this.variedad = variedad;
        this.bodega = bodega;
        this.precio = precio;
        this.stock = stock;
    }

    getPrecioFinal(){
        return this.precio + (this.precio * 0.21)
    }

}

let productoUno = new producto( 0001 , "Fond De Cave Gran Reserva" , "Malbec", "Trapiche",  2500 , 20 );
let productoDos = new producto( 0002 , "Luigi Bosca" , "Malbec", "Luigi Bosca",  1400 , 20 );
let productoTres = new producto( 0003 , "Rutini Cosecha 2008" , "Cabernet Sauvignon", "Rutini Wines",  11400 , 10 );



console.log (productoUno.getPrecioFinal())
console.log (productoTres.getPrecioFinal())


