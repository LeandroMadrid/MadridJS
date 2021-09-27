let votosA = 0;
let votosB = 0;


for( let i = 0 ; i < 6 ; i++){
    let votoUsuario = prompt("Vota por el equipo: A o B");

    if( votoUsuario == "A" ){
        console.log("VOTO A");
        votosA = votosA + 1;
    }
    else if( votoUsuario == "B"){
        console.log("VOTO B");
        votosB = votosB + 1;
    }
    else{
        console.log("VOTO NO VÁLIDO");
    }
}

if( votosA > votosB){
    console.log("VOTOS A: " + votosA);
    console.log("VOTOS B: " + votosB);
    alert("GANO EQUIPO A ");
}

else if( votosB > votosA){
    console.log("VOTOS A: " + votosA);
    console.log("VOTOS B: " + votosB);
    alert("GANO EQUIPO B ");

}

else{
    console.log("VOTOS A: " + votosA);
    console.log("VOTOS B: " + votosB);
    alert("EMPATE");
}
