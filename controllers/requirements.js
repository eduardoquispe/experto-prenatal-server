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
 
  
  for (const prop in objReturn) {
    let row;
    
    //res.status(200).json(prop);




    
    if(prop=='numeroAtencion'){
      row=estandar.numeroAtencion(objReturn[prop]);
    }
    if(prop=='pesoPreGestante'){
      row=estandar.pesoPreGestante(objReturn[prop]);
    }
    if(prop=='edadGestante'){
      row=estandar.edadGestante(objReturn[prop]);
    }
    if(prop=='pesoGestante'){
      row=estandar.pesoGestante(objReturn[prop]);
    }
    if(prop=='temperatura'){
      row=estandar.temperatura(objReturn[prop]);
    }
    if(prop=='precionArterial'){
      row=estandar.precionArterial(objReturn[prop]);
    }
    if(prop=='pulsoMaterno'){
      row=estandar.pulsoMaterno(objReturn[prop]);
    }
    if(prop=='alturaUterina'){
      row=estandar.alturaUterina(objReturn[prop]);
    }
    if(prop=='situacion'){
      row=estandar.situacion(objReturn[prop]);
    }
    if(prop=='presentacion'){
      row=estandar.presentacion(objReturn[prop]);
    }
    if(prop=='posicion'){
      row=estandar.posicion(objReturn[prop]);
    }
    if(prop=='frecuenciaCardiaFetal'){
      row=estandar.frecuenciaCardiaFetal(objReturn[prop]);
    }
    if(prop=='movimientoFetal'){
      row=estandar.movimientoFetal(objReturn[prop]);
    }
    if(prop=='proteinuriaCualitativa'){
      row=estandar.proteinuriaCualitativa(objReturn[prop]);
    }
    if(prop=='edema'){
      row=estandar.edema(objReturn[prop]);
    }
    if(prop=='reflejoOseoTendinoso'){
      row=estandar.reflejoOseoTendinoso(objReturn[prop]);
    }
    if(prop=='examenDePezon'){
      row=estandar.examenDePezon(objReturn[prop]);
    }
    if(prop=='indiceHierro'){
      row=estandar.indiceHierro(objReturn[prop]);
    }
    if(prop=='indiceAcidoFolio'){
      row=estandar.indiceAcidoFolio(objReturn[prop]);
    }
    if(prop=='indiceCalcio'){
      row=estandar.indiceCalcio(objReturn[prop]);
    }
    if(prop=='OrientacionConsejeria'){
      row=estandar.OrientacionConsejeria(objReturn[prop]);
    }
    if(prop=='ECOControl'){
      row=estandar.ECOControl(objReturn[prop]);
    }
    if(prop=='perfilBiofisico'){
      row=estandar.perfilBiofisico(objReturn[prop]);
    }
    if(prop=='cita'){
      row=estandar.cita(objReturn[prop]);
    }
    if(prop=='visitaDomicilia'){
      row=estandar.visitaDomicilia(objReturn[prop]);
    }
    if(prop=='planParto'){
      row=estandar.planParto(objReturn[prop]);
    }
    if(prop=='estabaDeLaAtencion'){
      row=estandar.estabaDeLaAtencion(objReturn[prop]);
    }
    if(prop=='numeroFormatoSis'){
      row=estandar.numeroFormatoSis(objReturn[prop]);
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
