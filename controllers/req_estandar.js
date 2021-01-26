// let numeroAtencion = function (valor) {
//     let obj={
//         "indicador":"numeroAtencion",
//         "valor":valor,
//         "msj":"Este es el mensaje",
//         "respuesta":"Esta es la respuesta",
//         "estado":'verde'
//     } 
//     return obj;
// }
// let edadGestante = function (valor) {
 
//     let obj={
//         "indicador":"edadGestante",
//         "valor":valor,

//         "msj":"..peso_pregestante",
//         "respuesta":"Esta es la respuesta",
//         "estado":'verde'
//     } 
 
//     return obj;
// }
// let pesoPreGestante = function (valor) {
 
//     let obj={
//         "indicador":"pesoPreGestante",
//         "valor":valor,
//         "msj":"..peso_pregestante",
//         "respuesta":"Esta es la respuesta",
//         "estado":'verde'
//     } 
 
//     return obj;
// }
let msg=null;
let estado="verde";

let numeroAtencion = function (valor) {
    let obj={
        "indicador":"numeroAtencion",
        "valor":valor,
        "msg":`Numero de atencion ${valor}`,
        "estado":estado
    } 
    return obj;
}
let edadGestante = function (valor) {
    let obj={
        "indicador":"edadGestante",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}
let pesoPreGestante = function (valor) {
    let obj={
        "indicador":"pesoPreGestante",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}
let pesoGestante = function (valor) {
    let obj={
        "indicador":"pesoGestante",
        "valor":valor,
        "msj":msg,
        "estado":estado
    } 
    return obj;
}
let temperatura = function (valor) {

    if(valor<=37 && valor>=36){
        msg="Tempera estable";estado='verde';
    }else if(valor>37){
        msg="La temepera es muy elevada";estado='rojo';
    }else if(valor<36){
        msg="La temepera es esta inferior al rango";estado='rojo';
    }

    let obj={
        "indicador":"temperatura",
        "valor":valor,
        "msj":msg,
        "estado":estado
    } 
    return obj;
}

// PESION_ARTERIAL: rango:80-90/120  , Estamos una complicacion-Preclancia
// 			 Si es mayor consecuencia,Si es mas de e


let precionArterial = function (valor) {

    var divisiones = valor.split("/");
    let num=divisiones[0];
    let deno=divisiones[1];

    let obj={
        //80-90/120 
        "indicador":"precionArterial",
        "valor":valor,
        "msg":`msg ${num} sdsa${deno}`,
        "estado":estado
    } 
    return obj;
}
//60-80
let pulsoMaterno = function (valor) {
    let obj={
        "indicador":"pulsoMaterno",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}
// Por mes 4 cm [crecimiento fetal][Max 36 cm]
// -Recomendación ir al baño, no vejiga llena. 
// Max-excede:Tenga en vientre, vejia llena o tejido adiposo    ,
// Min:Anemia bebe debil.
// *Si esta muy obeso programar sesaria.
let alturaUterina = function (valor) {
    let obj={
        "indicador":"alturaUterina",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}


// SITUACION(LONGITUDINAL/TRANSVERSO)[L/T] 
// Solo apartir de 14 Semanas ,donde esta la cabez el potito.
// 1 y 2 TRIMESTRE L
// L:debe ir al momento del parto.
let situacion = function (valor) {
    let obj={
        "indicador":"situacion",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}


// PRESENTACION(Cefalico cabeza / Podalico nalga)
// 1 y 2 PODALICO  [REVISAR]
let presentacion = function (valor) {
    let obj={
        "indicador":"presentacion",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}

// POSICION[Izquierdo/Derecho]:No indica animalidad.
let posicion = function (valor) {
    let obj={
        "indicador":"posicion",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}


// FRECUENCIA .CARDIACA .FETAL( por min /NA): 140-148
// Mayor:[revisar] Estado animo de la gestante.
// Menor:Porpenso a anemia o anomalia a su corazón.
let frecuenciaCardiaFetal = function (valor) {
    let obj={
        "indicador":"frecuenciaCardiaFetal",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}


// MOVIMIENTO FETAL(+/++/+++/SM/NA)
// +:Se mueve poquito
// Estandar: Del primer trimestre se muestran Ondas.
// Excede: Si se mueve mucho no hay anomalia.
// Menor: Si el bebe no se mueve alerta.
let movimientoFetal = function (valor) {
    let obj={
        "indicador":"movimientoFetal",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}

// Proteinuria Cualitativa(+/++/+++/NSH).
// [Examenes sofistificados-NIVEL COMPLICADO].
// -Si hay complicaciones generalmente peligra.
let proteinuriaCualitativa = function (valor) {
    let obj={
        "indicador":"proteinuriaCualitativa",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}



// EDEMA(+/++/+++/SE).
// Estandar:+.
// Sin edema no toma liquido.
// [REVISAR]
let edema = function (valor) {
    let obj={
        "indicador":"edema",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}

// REFLEJO OSEOTENDINOSO:
// Estandar de no presentar.
// Dolor en la boca del estomago.
let reflejoOseotendinoso = function (valor) {
    let obj={
        "indicador":"reflejoOseotendinoso",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}


// EXAMEN DE PEZON (F/NF) [FORMADO /NO FORMADO]
// Estandar:Formado apartir del primer consulta.
// Garantizando el paego seguro, la primera lactancia.
let examenDePezon = function (valor) {
    let obj={
        "indicador":"examenDePezon",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}


// INDICE .FIERRO / AC FOLICO [
//     ESTANDAR:DEL PRIMER TRIMESETRE TABLETA DE ACIDO FOLICO.
//     FIERRO: APARTIR DE L4 MES YA QUE PUEDE TENER NAUSEAS.
//     FIERRO:para la gestante al lactar sobre todo va a votar sangre.

let indiceHierro = function (valor) {
    let obj={
        "indicador":"indiceHierro",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}

 //     ESTANDAR:DEL PRIMER TRIMESETRE TABLETA DE ACIDO FOLICO.

let indiceAcidoFolio = function (valor) {
    let obj={
        "indicador":"indiceAcidoFolio",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}
// INDICIONAL CALCIO:
// 20 SEMANAS CALCIO APARTIR DE 20 SEMANAS POR QUE NECESITA ADICIONAL.
let indiceCalcio = function (valor) {
    let obj={
        "indicador":"indiceCalcio",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}

// --PLANIFICAICON FAMILIAR
// ORIENTACION CONSEJERIA: 
// [REVISAR]

let OrientacionConsejeria = function (valor) {
    let obj={
        "indicador":"OrientacionConsejeria",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}
let ECOControl = function (valor) {
    let obj={
        "indicador":"ECOControl",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}
let perfilBiofisico = function (valor) {
    let obj={
        "indicador":"perfilBiofisico",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}
let cita = function (valor) {
    let obj={
        "indicador":"cita",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}
let visitaDomicilia = function (valor) {
    let obj={
        "indicador":"visitaDomicilia",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}
let planParto = function (valor) {
    let obj={
        "indicador":"planParto",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}
let estabaDeLaAtencion = function (valor) {
    let obj={
        "indicador":"estabaDeLaAtencion",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}
let numeroFormatoSis = function (valor) {
    let obj={
        "indicador":"numeroFormatoSis",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}



module.exports = {
    numeroAtencion,
    edadGestante,
    pesoPreGestante,
    pesoGestante,
    temperatura,
    precionArterial,
    pulsoMaterno,
    alturaUterina,
    situacion,
    presentacion,
    posicion,
    frecuenciaCardiaFetal,
    movimientoFetal,
    proteinuriaCualitativa,
    edema,
    reflejoOseotendinoso,
    examenDePezon,
    indiceHierro,
    indiceAcidoFolio,
    indiceCalcio,
    OrientacionConsejeria,
    ECOControl,
    perfilBiofisico,
    cita,
    visitaDomicilia,
    planParto,
    estabaDeLaAtencion,
    numeroFormatoSis
}


// function edad_gestante(edad_gestante) {
//     if(edad_gestante==1){

//     }
//     return edad_gestante;
// } 

// module.exports = {
//     edad_gestante
// };

// module.exports()
// `Aprendiendo ${tecnologia} y ${tecnologia2}`;
// console.log(aprendiendo2('JavaScript', 'Node.js'));