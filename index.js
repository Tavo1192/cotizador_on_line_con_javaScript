// /*  cotizador on-line para vehiculos*/

function ingresaMarca(){
alert("Bienvenido/a al cotizador de seguros On-line Kagler");
let marca = alert("Selecciona la marca de tu vehiculo");
do{    
marca = parseInt(prompt("tu vehiculo es un: \n1)Ford\n2)Renault\n3)Volskwagen\n4)Fiat\n5)Otro?"))
/*esto sera luego una pestaña desplegable que entregue la opcion de marca del vehiculo*/
}while(marca !=1 && marca !=2 && marca !=3 && marca !=4 && marca !=5)
}

 

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
    return "Como deseas abonar?";
}


/*aca coloco el Array y lo saco por consola en forma de tabla*/
function carritoPoliza(anio,poliza){
alert(anio+"\n"+poliza)
const modoPAgo = ["\n1)credito","\n2)debito","\n3)transferencia","\n4)mercado pago","\n5)o puedes elejir otra opcion"];
console.table(modoPAgo)
}




   
    

ingresaMarca();
const muestraPoliza = muestraAnio();
const precioPoliza = polizaAnual(muestraPoliza);
carritoPoliza(muestraPoliza,precioPoliza);











