const { response, request, json } = require("express");
const estandar= require("../controllers/req_estandar");

// import API from '../controllers/req_estandar.js';


const showRequirements =(req = request, res = response) => {

  let array=[];
  let objReturn=req.body;

  let num=estandar.edadGestante(25);
  // res.status(200).json(num);
  // let num2=estandar.pesoPreGestante(25);

  // if(req.body['edad_gestante']){
  //   let edad_gestante_re=estandar.edadGestante(25);
  // }


  var arrayResult = [];
  // res.status(200).json(testScores);
 let numberAtencion;
  
  for (const prop in objReturn) {
    let row;
    let valor=objReturn[prop];
    //res.status(200).json(prop);
     //  objReturn[prop]



    
    if(prop=='numeroAtencion'){
      numberAtencion=valor;
      // res.status(200).json(numberAtencion);
      row=estandar.numeroAtencion(valor,numberAtencion);
    }

    if(prop=='edadGestante'){
      row=estandar.edadGestante(valor,numberAtencion);
    }
    if(prop=='pesoGestante'){
      row=estandar.pesoGestante(valor,numberAtencion);
    }
    if(prop=='temperatura'){
      row=estandar.temperatura(valor,numberAtencion);
    }
    if(prop=='precionArterial'){
      row=estandar.precionArterial(valor,numberAtencion);
    }
    if(prop=='pulsoMaterno'){
      row=estandar.pulsoMaterno(valor,numberAtencion);
    }
    if(prop=='alturaUterina'){
      row=estandar.alturaUterina(valor,numberAtencion);
    }
    if(prop=='situacion'){
      row=estandar.situacion(valor,numberAtencion);
    }
    if(prop=='presentacion'){
      row=estandar.presentacion(valor,numberAtencion);
    }
    if(prop=='posicion'){
      row=estandar.posicion(valor,numberAtencion);
    }
    if(prop=='frecuenciaCardiaFetal'){
      row=estandar.frecuenciaCardiaFetal(valor,numberAtencion);
    }
    if(prop=='movimientoFetal'){
      row=estandar.movimientoFetal(valor,numberAtencion);
    }
    if(prop=='proteinuriaCualitativa'){
      row=estandar.proteinuriaCualitativa(valor,numberAtencion);
    }
    if(prop=='edema'){
      row=estandar.edema(valor,numberAtencion);
    }
    if(prop=='reflejoOseoTendinoso'){
      row=estandar.reflejoOseoTendinoso(valor,numberAtencion);
    }
    if(prop=='examenDePezon'){
      row=estandar.examenDePezon(valor,numberAtencion);
    }
    if(prop=='indiceHierro'){
      row=estandar.indiceHierro(valor,numberAtencion);
    }
    if(prop=='indiceAcidoFolio'){
      row=estandar.indiceAcidoFolio(valor,numberAtencion);
    }
    if(prop=='indiceCalcio'){
      row=estandar.indiceCalcio(valor,numberAtencion);
    }
    if(prop=='OrientacionConsejeria'){
      row=estandar.OrientacionConsejeria(valor,numberAtencion);
    }
    if(prop=='ECOControl'){
      row=estandar.ECOControl(valor,numberAtencion);
    }
    if(prop=='perfilBiofisico'){
      row=estandar.perfilBiofisico(valor,numberAtencion);
    }
    if(prop=='cita'){
      row=estandar.cita(valor,numberAtencion);
    }
    if(prop=='visitaDomicilia'){
      row=estandar.visitaDomicilia(valor,numberAtencion);
    }
    if(prop=='planParto'){
      row=estandar.planParto(valor,numberAtencion);
    }
    if(prop=='establecimientoDeLaAtencion'){
      row=estandar.establecimientoDeLaAtencion(valor,numberAtencion);
    }
    if(prop=='numeroFormatoSis'){
      row=estandar.numeroFormatoSis(valor,numberAtencion);
    }
    if(row!=null){

      arrayResult.push(row);
    }
  }
  res.status(200).json(arrayResult);

  // "numeroAtencion": 1,
  // "edadGestante": 15,
  // "pesoPreGestante": 50,
  // "pesoGestante": 55,
  // "temperatura": 35,
  // "precionArterial": 80,
  // "pulsoMaterno": 60,
  // "alturaUterina": "",
  // "situacion": "Lontiinal//NA",
  // "presentacion": "",
  // "posicion": "",
  // "frecuenciaCardiaFetal": "",
  // "movimientoFetal": "Lontiinal//NA",
  // "proteinuriaCualitativa": "",
  // "edema": "",
  // "reflejoOseotendinoso": "",
  // "examenDePezon": "",
  // "indiceHierro": "",
  // "indiceAcidoFolio": "",
  // "indiceCalcio": "",
  // "OrientacionConsejeria": "",
  // "ECOControl": "",
  // "perfilBiofisico": "",
  // "cita": "",
  // "visitaDomicilia": "",
  // "planParto": "",
  // "estabaDeLaAtencion": "",
  // "numeroFormatoSis": ""

};


module.exports = {
    showRequirements
};
