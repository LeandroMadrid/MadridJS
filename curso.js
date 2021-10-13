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

const vinos = [ ]

class producto{
    constructor( id , nombre , variedad, bodega, precio , stock){
        this.id = id;
        this.nombre = nombre;
        this.variedad = variedad;
        this.bodega = bodega;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
    }
}

vinos.push(new producto ( 0001 , "Fond De Cave Gran Reserva" , "Malbec", "Trapiche",  2500 , 50 ));
vinos.push(new producto ( 0002 , "Luigi Bosca" , "Merlot", "Luigi Bosca",  1400 , 80 ));
vinos.push(new producto ( 0003 , "Rutini Cosecha 2008" , "Cabernet Sauvignon", "Rutini Wines",  11400 , 10 ));

function elejirFiltro ( ){
    let orden = parseInt (prompt(" Elegi, queres ordenarlos por precio (1) o Stock (2)? *Ingresa el numero ")) 
       if ( orden == 1) {
   
           console.log("Elegiste por precio") 
           
           vinos.sort(  function (precio1,precio2  ) {
   
               if (precio1.precio > precio2.precio) {
   
                 return 1;
               } else if (precio1.precio < precio2.precio) {
                 return -1;
               } else {
                   return 0;
               }
   
             }); console.log(vinos);
   
   
       } else if ( orden == 2) {
   
           console.log("Elegiste Stock")
   
           vinos.sort(function (a, b) {
               if ( a.stock > b.stock )
                 return 1;
               if ( a.stock < b.stock )
                 return -1;
               return 0
           });  console.log(vinos);
   
       } else {
           console.log("error")
       }
   }
   
    elejirFiltro()
   

