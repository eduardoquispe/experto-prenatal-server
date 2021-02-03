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

  // let valor="15";
  // isNaN(valor)
  // res.status(200).json(isNaN(valor));

  // if(isNaN(valor)){     
  //   res.status(200).json(valor);
  // }else{
  //   // "metr"
  //   valor = parseInt(valor);
  //   res.status(200).json(valor);
  // }

  
let numberAtencion=objReturn['numeroAtencion'];

if(!isNaN(numberAtencion)){     
  numberAtencion = parseInt(numberAtencion);
}



  for (const prop in objReturn) {
    let row;
    let valor=objReturn[prop];
  
    
    // valor=Number(valor)
    // isNaN(valor)
    if(isNaN(valor)){
      valor=valor.toLowerCase().trim();
    }

    
    if(prop=='numeroAtencion'){

      
      
      // res.status(200).json(numberAtencion);
      row=estandar.numeroAtencion(valor,numberAtencion);
    }

    if(prop=='edadGestante'){

      if(!isNaN(valor)){     
        valor = parseInt(valor);
      }
      
      row=estandar.edadGestante(valor,numberAtencion);
    }
    if(prop=='pesoGestante'){
      if(!isNaN(valor)){     
        valor = parseFloat(valor);
      }
      row=estandar.pesoGestante(valor,numberAtencion);
    }
    if(prop=='temperatura'){
      if(!isNaN(valor)){     
        valor = parseFloat(valor);
      }
      row=estandar.temperatura(valor,numberAtencion);
    }
    if(prop=='precionArterial'){
      if(!isNaN(valor)){     
        valor = parseFloat(valor);
      }
      row=estandar.precionArterial(valor,numberAtencion);
    }
    if(prop=='pulsoMaterno'){
      if(!isNaN(valor)){     
        valor = parseFloat(valor);
      }
      row=estandar.pulsoMaterno(valor,numberAtencion);
    }
    if(prop=='alturaUterina'){
      if(!isNaN(valor)){     
        valor = parseFloat(valor);
      }
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
    if(prop=='reflejoOseotendinoso'){
      row=estandar.reflejoOseotendinoso(valor,numberAtencion);
    }
    if(prop=='examenDePezon'){
      row=estandar.examenDePezon(valor,numberAtencion);
    }
    if(prop=='indiceFierro'){
      row=estandar.indiceFierro(valor,numberAtencion);
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

  try{
 
    res.status(200).json(arrayResult);

  }catch(error){
    res.status(200).json(error);
  }
 
};


module.exports = {
    showRequirements
};
