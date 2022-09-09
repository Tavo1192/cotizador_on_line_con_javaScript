/*  cotizador on-line para vehiculos*/
alert("Bienvenido/a al cotizador de seguros On-line Kagler");
let registroNombre = prompt("Ingresa tu nombre y apellido para poder registrarte, gracias!!");
if (registroNombre ==""){
    alert("Ingresa tu nombre por favor!!!" );
}
else{
    let pagar;
    do{
        console.table(alert(registroNombre + " como deseas abonar? \n 1- tarjeta de credito \n 2- tarjeta de debito \n 3- transferencia \n 0- Salir"));
        pagar= Number(prompt("Elegi el numero de la opcion para abonar"));
        alert("Excelente!! tu descuento es del 30% sobre el valor total de la poliza");
    }while(pagar == 0);
        alert("El siguiente paso es " + registroNombre)
    }     
/*----------------------------------------------------*/     

function ingresaMarca(){

let marca = alert("Seleccionar la marca de tu vehiculo");
do{    
marca = parseInt(prompt("tu vehiculo es un: \n1)Ford\n2)Renault\n3)Volskwagen\n4)Fiat\n5)Otro?"))
/*esto sera luego una pestaña desplegable que entregue la opcion de marca del vehiculo*/
}while(marca !=1 && marca !=2 && marca !=3 && marca !=4 && marca !=5)
}

/*-----------------------------------------------------*/ 

function muestraAnio(){
let anio;
do{ 
anio = parseInt(prompt("Por favor indicanos el año de patentamiento tu vehiculo: \n1)2022\n2)2021\n3)2020\n4)2019\n5)Otro?"))
/*esto sera luego una pestaña desplegable que entregue la opcion de año de patentamiento del vehiculo*/
}while(anio !=1 && anio !=2 && anio !=3 && anio !=4 && anio !=5)

switch(anio){
   case 1:
       return "Tu poliza anual para el modelo 2022 es de $120.000 mil pesos";
   case 2:
       return "Tu poliza anual para el modelo 2021 es de $110.000 mil pesos";
   case 3:
       return "Tu poliza anual para el modelo 2020 es de $100.000 mil pesos";
   case 4:
      return "Tu poliza anual para el modelo 2019 es de $90.000 mil pesos";
   case 5:
      return "Tu poliza anual  sera calculada por uno de nuestros asesores";

    }
}


function polizaAnual(poliza){
    if(poliza === "2022"){
        return "Tu poliza anual para el modelo 2022 es de $120.000 mil pesos";
        
}else if(poliza === "2021"){
        return "Tu poliza anual para el modelo 2021 es de $110.000 mil pesos";

}else if(poliza === "2020"){
    return "Tu poliza anual para el modelo 2021 es de $100.000 mil pesos";

}else if(poliza === "2019"){
    return "Tu poliza anual para el modelo 2021 es de $90.000 mil pesos";
    

}else(poliza === "Otro")
    return "Contrata tu seguro de manera on-line y te descontamos 30% en el total de la poliza";

}


/*aca coloco el Array y lo saco por consola en forma de tabla donde se muestran las opciones de pago*/

function carritoPoliza(anio,poliza){
alert(anio+"\n"+poliza)

}

/* añado otros arrays en 2 dimenciones, lo saco por tabla donde muestra el total a descontar"*/

const pagoDescuento = [["120000",((120000*30)/100)], ["110000", ((110000*30)/100)], ["100000", ((100000*30)/100)], ["90000", ((90000*30)/100)]];
for (let i = 0; i <= 4; i++){
}


/* añado metodo find*/

const descuento = [
    {modelo: "Autos modelo 2022 descuento suscripcion on-line de", descuento: "$36.000"}, 
    {modelo: "Autos modelo 2010", descuento: "debes comunicarte con nuestros asesores"}
]

const resultado = descuento.find((el) => el.modelo === "Autos modelo 2022 descuento suscripcion on-line de")
const resultado1 = descuento.find((el) => el.modelo === "Autos modelo 2010")

/* añado metdo filter*/
const descuento2 = [
    {modelo: "Autos modelo 2022 descuento suscripcion on-line de", descuento:36.000},
    {modelo: "Autos modelo 2021 descuento suscripcion on-line de", descuento:33.000},
    {modelo: "Autos modelo 2020 descuento suscripcion on-line de", descuento:30.000}, 
    {modelo: "Autos modelo 2010", descuento: "debes comunicarte con nuestros asesores"}
]

const resultadoA = descuento.filter((el) => el.modelo.includes ("Autos modelo 2010"));
const resultadoB = descuento.filter((el) => el.descuento < 27000)

console.table(resultadoA)
console.table(resultadoB)



/*------------------------------*/

console.table(pagoDescuento)
console.table(resultado)

/*------------------------------*/
ingresaMarca();
const muestraPoliza = muestraAnio();
const precioPoliza = polizaAnual(muestraPoliza);
carritoPoliza(muestraPoliza,precioPoliza);













