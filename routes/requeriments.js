// === Rutas de Usuario |Auth ----HOST + /API/AUTH === //

const { Router } = require("express");

const {
    showRequirements
  } = require("../controllers/requirements");
const router = Router();



//el val jwt si solo es 1
router.post("/", showRequirements);
module.exports = router;



































// Armar de cada los datos de los indicadores que les toco :
// Numero de atencion : 1
// Estandar: 70-80 
// Mensaje estandar: 
// Mensaje cuando excede al limite:
// Mensaje cuando es menor al minimo:
// Estado: verde/rojo/naranja





// mongodb+srv://UserJunior:PJunior@cluster0.zrmff.mongodb.net/test
// mongodb+srv://UserJunior:PJunior@cluster0.zrmff.mongodb.net/DB_Experto

/*



ASISTENCIA POR WIFI O CLAVE 
DIAGRAM DE FLUJO 


REGISTRO ASISTENCIA
-- R ASISTENCIA
-- R PAGOS


-var:que se requiere para el registro


empleado: registra asistencia


CREAR SUPERVISOR
-ASIGNAR SOLO LECTURA 



comision por venta 
En el rol de trabajador  poner su comision

APROBAR COMISIONES INGRESADAS POR empleado
CONTABILIDAD MIRA 



Estado de cliente [ng-negociacion/nu-no ubicado/nu-renuente/Dperdido]
"Lead_Status":"NG – Negociación".
NG – Negociación.
Nombre de cliente / Full_Name
monto a pagar / Monto_a_Pagar
movil / Mobile
correo electronico / Email
descripcion de deuda IV MENSUALIDAD / Descripci_n_de_deuda
Descripcion [diplomado en tributacion]  / Description


AGREGAR CAJA HUANCAYO 

Por ejemplo estos son los discentes que cumplen años los 27 de enero(27-01).
SOLO MENSUALIDADES
CAMBIAR LO QUE INGRESA 25/01/2021 [fecha de registro]
LOS PAGOS EL DIA 20  []


<option value="" disabled="">--Seleccione--</option>
<option value="1">BCP</option>
<option value="2">Scotiabank</option>
<option value="3">Banco de la nación</option>
<option value="4">Interbanck</option>
<option value="5">Citibanck</option>
<option value="6">BBVA</option>
<option value="9">Caja Municipal (Ica)</option>




2953 	2953 	450 	560 	404 	13 	0.1     405	   45  Carmen Giuliana 	Pachas Torres
2799 	2799 	450 	532 	381 	13 	0.1 	405	   45    IRINA JOSELYN 	HUALPA MARROQUIN
2845 	2845 	450 	539 	386 	13 	0.1 	405	   45   KARINA IVONNE 	CAPARACHIN LOAYZA
1915 	1915 	400 	368 	233 	4 	0.1 	360    40     Alex Roberto 	Yesquen Granda
3765 	3765 	500 	736 	560 	14 	0.1 	450    50  Heidy 	Gutierrez Sauñe


SELECT rg.id_cuota_pago,dt.id_dt_matricula_proyecto,dt.monto_establecido, dt.id_matricula_proyecto,ma.id_estudiante,pr.id_proyecto,
pr.porcentaje_descuento,us.nombre_usuario,us.apellido_usuario,us.dni FROM registro_pago rg 
INNER JOIN dt_matricula_proyecto dt on dt.id_dt_matricula_proyecto=rg.id_cuota_pago 
INNER JOIN matricula_proyecto ma on ma.id_matricula_proyecto=dt.id_matricula_proyecto 
INNER JOIN proyecto pr on pr.id_proyecto=ma.id_proyecto 
INNER JOIN estudiante es on es.id_estudiante=ma.id_estudiante 
INNER JOIN usuario us on us.id_usuario=es.id_usuario
 WHERE rg.fecha>'2021-01-26 00:00:00' AND rg.id_tp_cuota=1 and dt.id_tp_concepto_pago=2 
and dt.id_dt_matricula_proyecto<>3757 AND dt.id_dt_matricula_proyecto<>3202 


id_cuota_pago	id_dt_matricula_proyecto	monto_establecido	id_matricula_proyecto	id_estudiante	id_proyecto	porcentaje_descuento	nombre_usuario	apellido_usuario	dni 	

2953 	2953 	450 	560 	404 	13 	0.1 	Carmen Giuliana 	Pachas Torres 	40221337
2799 	2799 	450 	532 	381 	13 	0.1 	IRINA JOSELYN 	HUALPA MARROQUIN 	44762981
2845 	2845 	450 	539 	386 	13 	0.1 	KARINA IVONNE 	CAPARACHIN LOAYZA 	43067916
3765 	3765 	500 	736 	560 	14 	0.1 	Heidy 	Gutierrez Sauñe 	41375548

1915 	1915 	400 	368 	233 	4 	0.1 	Alex Roberto 	Yesquen Granda 	40845300



	86 	    2953 	1 	65 		1 	001 	2021-01-25 17:55:00.000000 	1 	4 	15 	1
	87 	    2799 	1 	66 		1 	001 	2021-01-26 17:55:11.000000 	1 	4 	15 	1
	88 	    2845 	1 	67 		1 	001 	2021-01-26 10:32:14.000000 	1 	4 	15 	1
	89 	    15 	2 	68 		1 	001 	2021-01-26 17:56:04.000000 	1 	4 	15 	1
	90 	    3749 	1 	69 	CULQUI 	4 	001 	2021-01-26 17:56:11.000000 	1 	2 	15 	1
	91 	    3750 	1 	70 	CULQUI 	4 	001 	2021-01-26 17:56:25.000000 	1 	2 	15 	1
	92 	    3752 	1 	71 		1 	001 	2021-01-26 17:57:36.000000 	1 	2 	15 	1
	93 	    3753 	1 	72 		1 	001 	2021-01-26 17:56:19.000000 	1 	2 	15 	1
	94 	    3754 	1 	73 		1 	001 	2021-01-26 17:57:29.000000 	1 	2 	15 	1
	95 	    3755 	1 	74 		1 	001 	2021-01-26 17:57:21.000000 	1 	2 	15 	1
	96 	    3202 	1 	75 		4 	001 	2021-01-26 17:57:03.000000 	1 	4 	15 	1
	97 	    3757 	1 	76 		1 	001 	2021-01-26 17:57:10.000000 	1 	2 	15 	1
	98 	    1915 	1 	77 		1 	001 	2021-01-26 12:50:47.000000 	1 	4 	15 	1
	99 	    17 	2 	78 		1 	001 	2021-01-26 13:03:38.000000 	1 	4 	15 	1
	101 	3763 	1 	79 	Constancia de Detracción N° 131963548 - OP. 147203... 	1 	001 	2021-01-26 16:20:38.000000 	1 	2 	15 	1
	102 	3764 	1 	80 		1 	001 	2021-01-26 16:25:10.000000 	1 	2 	15 	1
	103 	3765 	1 	81 		1 	001 	2021-01-26 16:29:01.000000 	1 	2 	15 	1



*/


// SELECT rg.id_cuota_pago,dt.id_dt_matricula_proyecto,dt.monto_establecido, dt.id_matricula_proyecto,ma.id_estudiante,pr.id_proyecto,
// pr.porcentaje_descuento,us.nombre_usuario,us.apellido_usuario,us.dni FROM registro_pago rg 
// INNER JOIN dt_matricula_proyecto dt on dt.id_dt_matricula_proyecto=rg.id_cuota_pago 
// INNER JOIN matricula_proyecto ma on ma.id_matricula_proyecto=dt.id_matricula_proyecto 
// INNER JOIN proyecto pr on pr.id_proyecto=ma.id_proyecto 
// INNER JOIN estudiante es on es.id_estudiante=ma.id_estudiante 
// INNER JOIN usuario us on us.id_usuario=es.id_usuario
// WHERE  us.dni in('41375548');


// rg.fecha>'2021-01-26 00:00:00' 
// AND rg.id_tp_cuota=1 and dt.id_tp_concepto_pago=2 



// Luber Tomás Montalván Garay, 	72687953
// Luis Enrique Alva Ruiz, 		40300809
// Osmar Adolfo Mogrovejo Falcón, 	61415253
// Christian Bryan Roncal Zapata, 	70022989
// Leydi Milenny Chaupis Julca, 	71660799
// Flor Guissel Espinoza Melgar, 	22290289
// Robert Bryan Mostacero Diaz, 	46189003
// DIEGO ALEXANDER PEREZ NEIRA, 	73883602
// Manuel Eleodoro Rodriguez Ruiz, 18110538
// Cristhiam Dodi Ramos Vivas, 	75084738
// Antonio Pucuhuayla Alfaro, 		70234926
// Lucero Diana Valencia Rivera, 	74693863
// Juan Vidal Huaman Rimachi,	 	42036954
// Luis Fernando Palomino Pereyra, 76757163
// Eder Esau Jara Iparraguirre, 	42283051
// Luis Guillermo Pardo Carrero, 	72422070
// Heidy Gutierrez Sauñe, 			41375548 
// (Elimina su descuento, ella canceló los 500 soles) 




// '2532', 	2532 	400 	488 	341 	12 	0.1 	Flor Guissel 	Espinoza  Melgar 	22290289    40  360
// '2233', 	2233 	400 	436 	294 	12 	0.1 	Christian Bryan 	Roncal Zapata 	70022989 	40 	360
// '2516', 	2516 	400 	486 	339 	12 	0.1 	Osmar Adolfo 	Mogrovejo Falcón 	61415253	40  360

// '2548', 	2548 	500 	490 	342 	13 	0.1 	Antonio 	Pucuhuayla Alfaro 	70234926		50  450
// '3002', 	3002 	500 	570 	410 	13 	0.1 	DIEGO ALEXANDER 	PEREZ NEIRA 	73883602 	50  450

// '2664', 	2664 	450 	507 	359 	13 	0.1 	Luber Tomás 	Montalván Garay 	72687953    45  405
// '2934', 	2934 	450 	557 	401 	13 	0.1 	Juan Vidal 	Huaman Rimachi 	42036954			45  405		
// '2942', 	2942 	450 	558 	402 	13 	0.1 	Luis Enrique 	Alva Ruiz 	40300809			45  405
// '2461', 	2461 	450 	476 	327 	13 	0.1 	Manuel Eleodoro 	Rodriguez Ruiz 	18110538	45  405
// '2807', 	2807 	450 	533 	382 	13 	0.1 	Luis Guillermo 	Pardo Carrero 	72422070		45  405
// '2779', 	2779 	450 	527 	380 	13 	0.1 	Robert Bryan 	Mostacero Diaz 	46189003		45  405
// '2597', 	2597 	450 	498 	326 	13 	0.1 	Leydi Milenny 	Chaupis Julca 	71660799		45  405
// '2707', 	2707 	450 	513 	368 	13 	0.1 	Lucero Diana 	Valencia Rivera 	74693863	45  405
// '2632', 	2632 	450 	503 	355 	13 	0.1 	Cristhiam Dodi 	Ramos Vivas 	75084738		45  405

// '3765', 	3765 	500 	736 	560 	14 	0.1 	Heidy 	Gutierrez Sauñe 	41375548			50  450
// '3457', 	3457 	500 	657 	487 	14 	0.1 	Eder Esau 	Jara Iparraguirre 	42283051		50  450
// '3186', 	3186 	500 	615 	451 	14 	0.1 	Luis Fernando 	Palomino Pereyra 	76757163	50  450



// UPDATE variacion_pago vr_pg SET vr_pg.monto=45,vr_pg.cantidad=1 WHERE vr_pg.id_dt_matricula in ( '2664', '2934', '2942', '2461', '2807', '2779', '2597', '2707', '2632') and vr_pg.id_tp_motivo=1 

// SELECT * FROM variacion_pago vr_pg WHERE vr_pg.id_dt_matricula in (
// 	'3765',
// 	'3457',
// 	'3186');


// select * from dt_matricula_proyecto dt where dt.id_dt_matricula_proyecto
// in (
// 	'3765',
// 	'3457',
// 	'3186');


// select * from registro_pago rg_pg where rg_pg.id_cuota_pago
// in ('2532',
// '2233',
// '2516');


// SELECT * FROM variacion_pago vr_pg WHERE vr_pg.id_dt_matricula in (
// 	'2664',
// 	'2934',
// 	'2942',
// 	'2461',
// 	'2807',
// 	'2779',
// 	'2597',
// 	'2707',
// 	'2632') and vr_pg.id_tp_motivo=1





	// BEGIN

    // -- CREAMOS LA TABLA TEMPORAL
    // CREATE TEMPORARY TABLE tablaTemporalPagos
    // (id_temp int not null AUTO_INCREMENT,
    // PRIMARY key(id_temp),
    // id_dt_matricula int,
    // nombre_discente TEXT,
    // dni varchar(10),
    // celular varchar(25),
    // email text ,
    // periodo CHAR(6),
    // concepto TEXT,
    // fraccion TEXT,
    // fecha_limite DATE,
    // monto_deuda FLOAT,
    // id_matricula int,
    // id_tp_programa int,
    // id_mensualidad int,
    // id_proyecto int,
    // nombre_proyecto varchar(250)
    // );



// DELIMITER $$
// CREATE PROCEDURE `TB_TEMP_DEUDORES3`(IN `fecha_inicio_p` DATETIME, IN `fecha_fin_p` DATETIME) NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER BEGIN

//     -- CREAMOS LA TABLA TEMPORAL 
//     CREATE TEMPORARY TABLE tablaTemporalPagos
//     (id_temp int not null AUTO_INCREMENT,
//     PRIMARY key(id_temp),
//     id_dt_matricula int,
//     nombre_discente TEXT,
//     dni varchar(10),
//     celular varchar(25),
//     email text ,

//     periodo CHAR(6),
//     concepto TEXT,
//     fraccion TEXT,
//     fecha_limite DATE,
// 	monto_deuda FLOAT,
// 	monto_establecido FLOAT,
//     id_matricula int,
//     id_tp_programa int,
//     id_mensualidad int,
//     id_proyecto int,
//     nombre_proyecto varchar(250)
//     );

//     -- INSERTANDO TABLA TEMPORAL

//         INSERT INTO tablaTemporalPagos 
//         SELECT NULL,fr.id_fraccion as id_dt_matricula,
//         CONCAT(us.nombre_usuario,' ',us.apellido_usuario) as nombre_discente , us.dni,us.celular,us.email,
//         year(dt.fecha_limite) as periodo ,
        
//         CONCAT(dt.lapso,' / Fracción ',fr.orden) as concepto,
        
        
//         CONCAT(tp_cu.tp_cuota,' - nro.',fr.orden)  as fraccion,
// 		fr.fecha_limite,fr.monto_establecido as monto_deuda,
// 		fr.monto_establecido as monto_establecido,
//         ma.id_matricula,ma.id_tp_programa,'0' as id_mensualidad ,ma.id_proyecto,pryt.nombre_proyecto
//         FROM dt_matricula_proyecto dt 
//         INNER JOIN matricula_proyecto ma on ma.id_matricula_proyecto=dt.id_matricula_proyecto 
//         INNER JOIN estudiante es on es.id_estudiante=ma.id_estudiante 
//         INNER JOIN usuario us on us.id_usuario=es.id_usuario 
//         INNER JOIN fraccion_pago fr on fr.id_dt_matricula_proyecto=dt.id_dt_matricula_proyecto
//         INNER JOIN tp_cuota tp_cu on tp_cu.id_tp_cuota=dt.id_tp_cuota
//         INNER JOIN proyecto pryt on pryt.id_proyecto=ma.id_proyecto 
//         WHERE fr.id_tp_estado_pago<>1 AND ma.id_tp_estado_matricula=1 AND ma.id_tp_programa=1
//         AND ma.id_tp_programa=1 AND dt.id_tp_cuota=2  AND fr.fecha_limite 
//         BETWEEN fecha_inicio_p AND fecha_fin_p;

//         INSERT INTO tablaTemporalPagos 
//         SELECT NULL,ma_ex.id_pago_extraordinario as id_dt_matricula,
//         CONCAT(us.nombre_usuario,' ',us.apellido_usuario) as nombre_discente , us.dni,us.celular,us.email,
//         year(ma_ex.fecha_limite) as periodo ,tp_cn.concepto_pago as concepto ,'---' as fraccion,
//         ma_ex.fecha_limite, ma_ex.monto_concepto as monto_deuda,ma_ex.monto_concepto as monto_establecido,
//         ma.id_matricula,ma.id_tp_programa,'0' as id_mensualidad, ma.id_proyecto,pryt.nombre_proyecto
//         FROM matricula_pagos_extraordinario ma_ex 
//         INNER JOIN matricula_proyecto ma on ma.id_matricula_proyecto=ma_ex.id_matricula 
//         INNER JOIN estudiante es on es.id_estudiante=ma.id_estudiante 
//         INNER JOIN usuario us on us.id_usuario=es.id_usuario 
//         INNER JOIN tp_concepto_pago tp_cn on tp_cn.id_tp_concepto_pago=ma_ex.id_tp_concepto_pago 
//         INNER JOIN proyecto pryt on pryt.id_proyecto=ma.id_proyecto 
//         WHERE ma_ex.id_tp_estado_pago<>1 AND ma.id_tp_estado_matricula=1 AND ma.id_tp_programa=1
//         AND ma.id_tp_programa=1  AND ma_ex.fecha_limite 
//         BETWEEN fecha_inicio_p AND fecha_fin_p;

//         INSERT INTO tablaTemporalPagos 
//         SELECT NULL,dt.id_dt_matricula_proyecto AS id_dt_matricula,
//         CONCAT(us.nombre_usuario,' ',us.apellido_usuario) as nombre_discente , us.dni,us.celular,us.email,
//         year(dt.fecha_limite) as periodo ,dt.lapso as concepto ,'---' as fraccion ,
//         dt.fecha_limite, dt.monto_pagado as monto_deuda ,dt.monto_establecido as monto_establecido,
//         ma.id_matricula,ma.id_tp_programa,1 as id_mensualidad,ma.id_proyecto,pryt.nombre_proyecto
//         FROM dt_matricula_proyecto dt INNER JOIN matricula_proyecto ma on ma.id_matricula_proyecto=dt.id_matricula_proyecto 
//         INNER JOIN estudiante es on es.id_estudiante=ma.id_estudiante 
//         INNER JOIN usuario us on us.id_usuario=es.id_usuario
//         INNER JOIN proyecto pryt on pryt.id_proyecto=ma.id_proyecto 
//         WHERE dt.id_tp_estado_pago<>1 AND ma.id_tp_estado_matricula=1 AND ma.id_tp_programa=1
//         AND ma.id_tp_programa=1  AND dt.id_tp_cuota=1 AND dt.fecha_limite 
//         BETWEEN fecha_inicio_p AND fecha_fin_p;

//        -- SELECT * FROM tablaTemporalPagos ORDER BY fecha_limite ASC;
//         SELECT tb.id_temp,tb.id_dt_matricula, tb.nombre_discente,tb.dni,tb.celular,tb.email, tb.periodo,tb.concepto,tb.fraccion,
//         tb.fecha_limite,FORMAT(tb.monto_deuda,2) as monto_deuda,monto_establecido,tb.id_matricula,tb.id_tp_programa,tb.id_mensualidad,tb.id_proyecto,tb.nombre_proyecto
//         FROM tablaTemporalPagos tb ORDER BY tb.fecha_limite ASC;

// END $$