
let msg=null;
let estado="verde";
 
let numeroAtencion  = function (valor,atencion) {
    
    let obj={
        "indicador":"numeroAtencion", 
        "label":"Numero atención",
        "valor":valor,
        "msg":`Numero de atencion ${valor}`,
        "estado":estado
    } 
    return obj;
}

let edadGestante  = function (valor,atencion) {
      estado="naranja";

    if(valor==4  && 1==atencion){estado='verde'} 
    if(valor==8  && 2==atencion){estado='verde'} 
    if(valor==12 && 3==atencion){estado='verde'}
    if(valor==16 && 4==atencion){estado='verde'}
    if(valor==20 && 5==atencion){estado='verde'}
    if(valor==24 && 6==atencion){estado='verde'}
    if(valor==28 && 7==atencion){estado='verde'}
    if(valor==32 && 8==atencion){estado='verde'}
    if(valor==36 && 9==atencion){estado='verde'}

    if(estado=='verde'){msg=`Control de crecimiento realizado, ${valor} semanas `}
    else{msg='Falta de revicion del crecimiento de el bebe'}

    let obj={
        "indicador":"edadGestante", 
        "label":"Edad gestante",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}
let pesoGestante  = function (valor,atencion) {

    let mensaje_min="Riesgo de desnutricion para el bebe.";
    let mensaje_max="Riesgo de obecidad para el bebe.";

    estado='naranja';
    msg="Bebe saludable"
    if(1==atencion){
        if(valor>65 && valor<=67){estado='verde'} 
        if(valor<65){msg=mensaje_min}
        if(valor>67){msg=mensaje_max}
    }
    if(2==atencion){
        if(valor>67 && valor<=69){estado='verde'} 
        if(valor<67){msg=mensaje_min}
        if(valor>69){msg=mensaje_max}
    }
    if(3==atencion){
        if(valor>69 && valor<=71 ){estado='verde'} 
        if(valor<67){msg=mensaje_min}
        if(valor>69){msg=mensaje_max}
    }
    if(4==atencion){
        if(valor>71 && valor<=73 ){estado='verde'} 
        if(valor<71){msg=mensaje_min}
        if(valor>73){msg=mensaje_max}
    }
    if(5==atencion){
        if(valor>73 && valor<=75 ){estado='verde'} 
        if(valor<73){msg=mensaje_min}
        if(valor>75){msg=mensaje_max}
    }
    if(6==atencion){
        if(valor>75 && valor<=77 ){estado='verde'} 
        if(valor<75){msg=mensaje_min}
        if(valor>77){msg=mensaje_max}
    }
    if(7==atencion){
        if(valor>79 && valor<=81 ){estado='verde'} 
        if(valor<79){msg=mensaje_min}
        if(valor>81){msg=mensaje_max}
    }
    if(8==atencion){
        if(valor>79 && valor<=81 ){estado='verde'} 
        if(valor<79){msg=mensaje_min}
        if(valor>81){msg=mensaje_max}
    }
    if(9==atencion){
        if(valor>81 && valor<=83 ){estado='verde'} 
        if(valor<81){msg=mensaje_min}
        if(valor>83){msg=mensaje_max}
    }

    



    let obj={
        "indicador":"pesoGestante", 
        "label":"Peso gestante", 
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}
let temperatura  = function (valor,atencion) {

    if(valor<=37 && valor>=36){
        msg="Tempera estable";estado='verde';
    }else if(valor>37){
        msg="Alto riesgo de que el bebe presente dificultades por pérdida de líquido amniótico.";estado='rojo';
    }else if(valor<36){
        msg="Alto riesgo de que el bebe sufra por la baja de temperatura del cuerpo.";estado='rojo';
    }

    let obj={
        "indicador":"temperatura", 
        "label":"Temperatura",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}

// PESION_ARTERIAL: rango:80-90/120  , Estamos una complicacion-Preclancia
// 			 Si es mayor consecuencia,Si es mas de e


let precionArterial  = function (valor,atencion) {

    // var divisiones = valor.split("/");
    // let num=divisiones[0];
    // let deno=divisiones[1];

    if(valor<=90 && valor>=80){
        msg="Presión arterial estable.";estado='verde';
    }else if(valor>90){
        msg="Alto riesgo de hipertension crónica y falta de oxigeno para el bebe.";estado='rojo';
    }else if(valor<80){
        msg="Riesgo a la madre gestante este con la  presion baja afectando al bebe.";estado='rojo';
    }

    let obj={
        //80-90/120 
        "indicador":"precionArterial", 
        "label":"Precion arterial",
        "valor":valor,
        "msg":`Presión arterial estable`,
        "estado":estado
    } 
    return obj;
}
//60-80
let pulsoMaterno  = function (valor,atencion) {

    if(valor<=80  && valor>=60 ){
        msg="Ritmo cardiaco estable..";estado='verde';
    }else if(valor>80){
        msg="Alto riesgo de provocar la muerte al bebe y a la madre.";estado='rojo';
    }else if(valor<60){
        msg="Riesgo de provocar la muerte al bebe.";estado='rojo';
    }


    let obj={
        "indicador":"pulsoMaterno", 
        "label":"Pulso materno",
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
let alturaUterina  = function (valor,atencion) {


    let mensaje_min="posible señal de futura sesaria.";
    let mensaje_max="posible aumento de peso por parte de la madre.";
    
     let estado='rojo';
    if(1==atencion){
        if(valor==4){estado='verde'} 
        if(valor<4){msg=mensaje_min}
        if(valor>4){msg=mensaje_max}
    }
    if(2==atencion){
        if(valor==8){estado='verde'} 
        if(valor<8){msg=mensaje_min}
        if(valor>8){msg=mensaje_max}
    }
    if(3==atencion){
        if(valor==12){estado='verde'} 
        if(valor<12){msg=mensaje_min}
        if(valor>12){msg=mensaje_max}
    }
    if(4==atencion){
        if(valor==16){estado='verde'} 
        if(valor<16){msg=mensaje_min}
        if(valor>16){msg=mensaje_max}
    }
    if(5==atencion){
        if(valor==20 ){estado='verde'} 
        if(valor<20){msg=mensaje_min}
        if(valor>20){msg=mensaje_max}
    }
    if(6==atencion){
        if(valor==24){estado='verde'} 
        if(valor<24){msg=mensaje_min}
        if(valor>24){msg=mensaje_max}
    }
    if(7==atencion){
        if(valor==28){estado='verde'} 
        if(valor<28){msg=mensaje_min}
        if(valor>28){msg=mensaje_max}
    }
    if(8==atencion){
        if(valor==32){estado='verde'} 
        if(valor<32){msg=mensaje_min}
        if(valor>32){msg=mensaje_max}
    }
    if(9==atencion){
        if(valor==36){estado='verde'} 
        if(valor<36){msg=mensaje_min}
        if(valor>36){msg=mensaje_max}
    }

    if(estado=='verde'){
          msg ="El bebe saludable";
    }


    let obj={
        "indicador":"alturaUterina", 
        "label":"Altura uterina",
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
let situacion  = function (valor,atencion) {

    estado='rojo'
    msg="Tomar medidas preventivas para el parto";

    if(atencion==1 || atencion==2){
        if(valor=='no aplica'){
            msg="el bebe saludable";
            estado='verde';
        }
    }
    if(atencion>=3 && atencion<=6){
        if(valor=='longitudinal'){
            msg="el bebe saludable";
            estado='verde';
        }
    }
    if(atencion>=7 && atencion<=9){
        if(valor=='transverso'){
            msg="el bebe saludable";
            estado='verde';
        }
    }

    let obj={
        "indicador":"situacion", 
        "label":"Situacion",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;

}

// PRESENTACION(Cefalico cabeza / Podalico nalga)
// Cefalico[cabeza]|Podalico[nalga])
// 1 y 2 PODALICO  [REVISAR]
// C/P/NA

let presentacion  = function (valor,atencion) {

    
    if(valor=='cefalico' || valor=='podalico'){
        
        msg=`Presentacion ${valor} prevista confirmada.`;
        estado='verde'
    }else{
        estado='naranja'
    }




    let obj={
        "indicador":"presentacion", 
        "label":"Presentacion",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}

// POSICION[Izquierdo/Derecho]:No indica animalidad.
let posicion  = function (valor,atencion) {



    msg=`la posicion del bebe es del lado ${valor}`
    estado='verde';

    let obj={
        "indicador":"posicion", 
        "label":"Posicion",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}


// FRECUENCIA .CARDIACA .FETAL( por min /NA): 140-148
// Mayor:[revisar] Estado animo de la gestante.
// Menor:Porpenso a anemia o anomalia a su corazón.
let frecuenciaCardiaFetal  = function (valor,atencion) {

    
    if(valor>=140  && valor<=160){
        msg="Frecuencia cardiaca normal";
        estado='verde';
    }
    if(valor<140){
        msg="Posible perdida de liquido amniotico";
        estado='rojo';
    }
    if(valor>160){
        msg="El bebe presenta problemas cardiacos";
        estado='rojo';
    }


    let obj={
        "indicador":"frecuenciaCardiaFetal", 
        "label":"Frecuencia Cardia Fetal",
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
let movimientoFetal  = function (valor,atencion) {


    if(valor=='+'||valor=='++'||valor=='+++'){
        msg="Muestra movimientos todo normal";estado='verde';
     }else if(valor=='na'||valor=='sinmovimiento'){
        msg="El bebe no se mueve, alerta"; 
        estado='rojo';
    }

    let obj={
        "indicador":"movimientoFetal", 
        "label":"Movimiento fetal",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}

// Proteinuria Cualitativa(+/++/+++/NSH).
// [Examenes sofistificados-NIVEL COMPLICADO].
// -Si hay complicaciones generalmente peligra.
let proteinuriaCualitativa  = function (valor,atencion) {


    if('nsh'==valor){
        msg="No presenta precion arterial alta.";estado='verde';
    }else{
        msg="Alto riesgo de precion arterial inestable.";estado='rojo';
    }



    let obj={
        "indicador":"proteinuriaCualitativa", 
        "label":"Proteinuria cualitativa",
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


let edema  = function (valor,atencion) {

    if(valor=='+'||valor=='++'||valor=='+++'){
        msg="Presenta hinchazón normal de la etapa del embarazo.";estado='verde';

    }else if(valor=='se'){
        msg="Alto riesgo por dolor a la boca del estomago.";estado='rojo';

    }


    let obj={
        "indicador":"edema", 
        "label":"Edema",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}

// REFLEJO OSEOTENDINOSO:
// Estandar de no presentar.
// Dolor en la boca del estomago.
let reflejoOseotendinoso  = function (valor,atencion) {

    if(valor==0){
        msg="No presenta dolor a nivel de la boca del estómago";estado='verde';
    }else{
        msg="Alto riesgo de dolor en la boca del estómago y complicaciones en el embarazo";estado='rojo';
    }

    let obj={
        "indicador":"reflejoOseotendinoso", 
        "label":"Reflejo Oseotendinoso",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}


// EXAMEN DE PEZON (F/NF) [FORMADO /NO FORMADO]
// Estandar:Formado apartir del primer consulta.
// Garantizando el paego seguro, la primera lactancia.
let examenDePezon  = function (valor,atencion) {

    if('formado'==valor){
        msg="Se muestra la formación del pezón, lo cual garantiza la lactancia del bebé";
        estado='verde';
    }  
    if('no formado'==valor){
        msg="Él bebe no podrá lactar cuando nazca. Posible riesgo de infección de las mamas.";
        estado='naranja';
    }
    if('sin examen'==valor){
        msg="Podría presentar dolor al darle de lactar al bebe. Y él bebe podría sufrir de anemia.";
        estado='rojo';
    }




    let obj={
        "indicador":"examenDePezon", 
        "label":"Examen de pezon",
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

let indiceFierro  = function (valor,atencion) {

    // str.toLowerCase();
    if(valor=='si consume'){
        msg='Ayudar a evitar la anemia en él bebe, y elevar la hemoglobina de la gestante';
        estado="verde"
    }
    if(valor=='no consume'){
        msg='Él bebe presentara falta de hierro y la gestante podría presentar problemas de lactancia materna';
        estado="rojo"
    }
    let obj={
        "indicador":"indiceFierro", 
        "label":"Indice fierro",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}

 //     ESTANDAR:DEL PRIMER TRIMESETRE TABLETA DE ACIDO FOLICO.

let indiceAcidoFolio  = function (valor,atencion) {

    // str.toLowerCase();
    if(valor=='si consume'){
        msg='Contribuye al desarrollo de los huesos del bebe y regulará la nutrición del bebé.';
        estado="verde"
    }
    if(valor=='no consume'){
        msg='Él bebe presentara falta de hierro y la gestante podría presentar problemas de lactancia materna';
        estado="rojo"
    }
    let obj={
        "indicador":"indiceFierro", 
        "label":"Indice acido folio",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;

 
}
// INDICIONAL CALCIO:
// 20 SEMANAS CALCIO APARTIR DE 20 SEMANAS POR QUE NECESITA ADICIONAL.
let indiceCalcio  = function (valor,atencion) {


    // str.toLowerCase();
    if(valor=='si consume'){
        msg='La gestante tendrá la regulación de calcio correcto en el organismo para que él bebe pueda absorber';
        estado="verde"
    }
    if(valor=='no consume'){
        msg='La gestante tendrá problemas de descalcificación, al igual que el bebé.';
        estado="rojo"
    }


    let obj={
        "indicador":"indiceCalcio", 
        "label":"Indice calcio",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}

// --PLANIFICAICON FAMILIAR
// ORIENTACION CONSEJERIA: 
// [REVISAR]

let OrientacionConsejeria  = function (valor,atencion) {
    
    if(valor=='si'){
        msg='Se orienta sobre el cuidado integral de la gestante y la planificación familiar.';
        estado="verde"
    }
    if(valor=='no'){
        msg='La falta de orientación podría traer problemas en la alimentación y nutrición saludable de la gestante y en el cuidado del bebé.';
        estado="naranja"
    }
    let obj={
        "indicador":"OrientacionConsejeria", 
        "label":"Orientacion consejeria",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}

 
let ECOControl  = function (valor,atencion) {


    if(valor=='se hizo'){
        msg='Se puede observar alguna complicación en la gestante y en la formación del feto.';
        estado="verde"
    }
    if(valor=='no se hizo'){
        msg='No se puede verificar el estado de salud del bebé';
        estado="rojo"
    }
    let obj={
        "indicador":"ECOControl", 
        "label":"Ecografia de Control",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}


// Se hizo/ No se hizo/ N.A.) 

// if(valor='Si'){
//     msg='';
//     estado="rojo"
// }
let perfilBiofisico  = function (valor,atencion) {

    if(valor=='na'){
        msg='Se realiza cuando la gestante esta hospitalizada, y se va a realizar su cesárea.';
        estado="verde"
    }else{
        msg='...';
        estado="rojo"
    }



    let obj={
        "indicador":"perfilBiofisico", 
        "label":"Perfil biofisico",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}
let cita  = function (valor,atencion) {

    if(valor==''){
        msg='No se ha registrado la fecha la fecha de su siguiente control.';
        estado="naranja"
    }else{
        msg=`Se ha registrado la fecha de su siguiente control para ${valor}`;
        estado="verde"
    }

    let obj={
        "indicador":"cita", 
        "label":"Cita",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}
let visitaDomicilia  = function (valor,atencion) {


    if(valor=='si'){
        msg='La gestante no acudió al control mensual, por lo que se realizará la visita domiciliaria.';
        estado="verde"
    }

    if(valor=='no'){
        msg='La visita domicilia se debió realizar al día siguiente de no haber acudido la gestante a su control mensual.';
        estado="naranja"
    }


    let obj={
        "indicador":"visitaDomicilia", 
        "label":"Visita domicilia",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}
let planParto  = function (valor,atencion) {

    if(valor=='control'){
        msg='Se ha registrado el domicilio de la gestante y la persona que la apoyará durante el embarazo.';
        estado="verde"
    }

    if(valor=='visita'){
        msg='Se ha registrado el número telefónico y los puntos referenciales del domicilio de la gestante en caso de posibles complicaciones';
        estado="naranja"
    }
    if(valor=='no se hizo'){
        msg='No se conoce el domicilio de la gestante, ni el familiar que la apoyará durante el embarazo.';
        estado="rojo"
        }
    let obj={
        "indicador":"planParto", 
        "label":"Plan parto",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}
let establecimientoDeLaAtencion  = function (valor,atencion) {
    msg=`Establecimiento de atención o puesto de salud: ${valor}`;
    let obj={
        "indicador":"establecimientoDeLaAtencion", 
        "label":"Establecimiento de la atención",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}
let numeroFormatoSis  = function (valor,atencion) {

    msg=`Nro del Seguro de SIS: ${valor}`;

    let obj={
        "indicador":"numeroFormatoSis", 
        "label":"Número SIS",
        "valor":valor,
        "msg":msg,
        "estado":estado
    } 
    return obj;
}



module.exports = {
    numeroAtencion,
    edadGestante,
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
    indiceFierro,
    indiceAcidoFolio,
    indiceCalcio,
    OrientacionConsejeria,
    ECOControl,
    perfilBiofisico,
    cita,
    visitaDomicilia,
    planParto,
    establecimientoDeLaAtencion,
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