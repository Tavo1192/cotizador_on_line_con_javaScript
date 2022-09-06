class Cliente{
    constructor(nombre,presupuesto,tarjeta,telefono){
        this.nombre = nombre;
        this.presupuesto = parseFloat(presupuesto);
        this.tarjeta = tarjeta;
        this.telefono = telefono;
    }

    transferirDinero(valor){
        if((this.presupuesto > 0)&&(valor < this.presupuesto)){
            this.presupuesto -= valor;
            console.log(this.presupuesto);
            return valor
        }else{
            return 0;
        }
    }
}
// const cliente1 = new Cliente("Homero", 2000, true, "1234560");
// const cliente2 = new Cliente("Carlos", "1000", false, "21234560");
// const cliente3 = new Cliente("Barny", "50", false, "231234560");
// for (let index = 0; index < 5; index++) {
//     let entrada = parseFloat(prompt("INGRESAR MONTO"));
//     if (cliente1.transferirDinero(entrada)){
//         alert("EL CLIENTE " + cliente1.nombre+ " TE PUEDE PAGAR "+entrada);
//     }
//     if (cliente2.transferirDinero(entrada)){
//         alert("EL CLIENTE " + cliente2.nombre+ " TE PUEDE PAGAR "+entrada);
//     }
//     if (cliente3.transferirDinero(entrada)){
//         alert("EL CLIENTE " + cliente3.nombre+ " TE PUEDE PAGAR "+entrada);
//     }
// }