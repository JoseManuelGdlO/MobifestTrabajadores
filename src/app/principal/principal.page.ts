import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {


    dateHoy:any = new Date();
    dayLetra: string = this.dateHoy.toString();
    diaLetraHoy:string;
    diaNumHoy:string;
    mesHoy:string;
    anoHoy:string;
    hoyCompleto:string;

    hoyColor:string="#0200C0";
    manColor:string="#FFF";
    pasColor:string="#FFF";
    trasColor:string="#FFF";
    postColor:string="#FFF";
    
    hoyNumColor:string="#FFF";
    manNumColor:string="#0200C0";
    pasNumColor:string="#0200C0";
    trasNumColor:string="#0200C0";
    postNumColor:string="#0200C0";
    
    


    dateMan:any = new Date(); 
    dayLetraMan: string;
    diaLetraMan:string;
    diaNumMan:string;
    mesMan:string;
    anoMan:string;
    manCompleto:string;
    diLM:string;


    datePas:any = new Date(); 
    dayLetraPas: string;
    diaLetraPas:string;
    diaNumPas:string;
    mesPas:string;
    anoPas:string;
    pasCompleto:string;
    diLP:string;

    guardado:string;
    btnGuardado:any;


    dateTras:any = new Date(); 
    dayLetraTras: string;
    diaLetraTras:string;
    diaNumTras:string;
    mesTras:string;
    anoTras:string;
    trasCompleto:string;
    diLT:string;


    datePost:any = new Date(); 
    dayLetraPost: string;
    diaLetraPost:string;
    diaNumPost:string;
    mesPost:string;
    anoPost:string;
    postCompleto:string;
    diLPo:string;

  constructor(public http:HttpService) { 

 /////////////Hoy
  //  console.log("completo "+this.dateHoy);
    this.diaLetraHoy= this.dayLetra.substr(0, 3);
    this.diaLetraHoy = this.convertirEspLetra(this.diaLetraHoy);
  //  console.log("HOY Letra:  "+this.diaLetraHoy);
    this.diaNumHoy = this.dayLetra.substr(8, 2);
  //  console.log("HOY DIA:  "+ this.diaNumHoy);
    this.mesHoy = this.dayLetra.substr(4, 3);
    this.mesHoy = this.mesEspanol(this.mesHoy);
  //  console.log("HOY MES:  "+ this.mesHoy);
    this.anoHoy = this.dayLetra.substr(11, 4);
  //  console.log("HOY ANO:  "+this.anoHoy);
    this.hoyCompleto = this.anoHoy+"/"+this.mesHoy+"/"+this.diaNumHoy;
  //  console.log("HOY COMPLETO "+this.hoyCompleto);


  ///////////Manana
    this.dateMan.setDate(this.dateMan.getDate()+1);
    this.dayLetraMan = this.dateMan.toString();
    this.diLM= this.dayLetraMan.substr(0, 3);
    this.diLM = this.convertirEspLetra(this.diLM);
    //console.log(this.dayLetraMan);
    //console.log("MAN Letra:  "+this.diLM);
    this.diaNumMan = this.dayLetraMan.substr(8, 2);
    //console.log("MAN DIA:  "+ this.diaNumMan);
    this.mesMan = this.dayLetraMan.substr(4, 3);
    this.mesMan = this.mesEspanol(this.mesMan);
    //console.log("MAN MES:  "+ this.mesMan);
    this.anoMan = this.dayLetraMan.substr(11, 4);
    //console.log("MAN ANO:  "+this.anoMan);
    this.manCompleto = this.anoMan+"/"+this.mesMan+"/"+this.diaNumMan;
    //console.log("MAN COMPLETO "+this.manCompleto);

    ///////////Pasado
    this.datePas.setDate(this.datePas.getDate()+2);
    this.dayLetraPas = this.datePas.toString();
    //console.log(this.dayLetraPas);
    this.diLP= this.dayLetraPas.substr(0, 3);
    this.diLP = this.convertirEspLetra(this.diLP);
    //console.log("PAS Letra:  "+this.diLP);
    this.diaNumPas = this.dayLetraPas.substr(8, 2);
    //console.log("PAS DIA:  "+ this.diaNumPas);
    this.mesPas = this.dayLetraPas.substr(4, 3);
    this.mesPas = this.mesEspanol(this.mesPas);
    //console.log("PAS DIA:  "+ this.mesPas);
    this.anoPas = this.dayLetraPas.substr(11, 4);
    //console.log("PAS ANO:  "+this.anoPas);
    this.pasCompleto = this.anoPas+"/"+this.mesPas+"/"+this.diaNumPas;
    //console.log("PAS COMPLETO "+this.pasCompleto);
   

    ///////////TrasPasado
    this.dateTras.setDate(this.dateTras.getDate()+3);
    this.dayLetraTras = this.dateTras.toString();
    //console.log(this.dayLetraTras);
    this.diLT = this.dayLetraTras.substr(0, 3);
    this.diLT = this.convertirEspLetra(this.diLT);
    //console.log("PAs Letra:  "+this.diLT);
    this.diaNumTras = this.dayLetraTras.substr(8, 2);
    //console.log("TRAS DIA:  "+ this.diaNumTras);
    this.mesTras = this.dayLetraTras.substr(4, 3);
    this.mesTras = this.mesEspanol(this.mesTras);
    //console.log("TRAS DIA:  "+ this.mesTras);
    this.anoTras = this.dayLetraTras.substr(11, 4);
    //console.log("TRAS ANO:  "+this.anoTras);
    this.trasCompleto = this.anoTras+"/"+this.mesTras+"/"+this.diaNumTras;
    //console.log("TRAS COMPLETO "+this.trasCompleto);

    ///////////PostPasado
    this.datePost.setDate(this.datePost.getDate()+4);
    this.dayLetraPost = this.datePost.toString();
    //console.log(this.dayLetraPost);
    this.diLPo= this.dayLetraPost.substr(0, 3);
    this.diLPo = this.convertirEspLetra(this.diLPo);
    //console.log("POST Letra:  "+this.diLPo);
    this.diaNumPost = this.dayLetraPost.substr(8, 2);
    //console.log("POST DIA:  "+ this.diaNumPost);
    this.mesPost = this.dayLetraPost.substr(4, 3);
    this.mesPost = this.mesEspanol(this.mesPost);
    //console.log("POST MES:  "+ this.mesPost);
    this.anoPost = this.dayLetraPost.substr(11, 4);
    //console.log("POST ANO:  "+this.anoPost);
    this.postCompleto = this.anoPost+"/"+this.mesPost+"/"+this.diaNumPost;
    //console.log("POST COMPLETO "+this.postCompleto);

    this.guardado = this.hoyCompleto;

    this.traer(1,this.guardado);
   
    

  }

  mesEspanol(mes: string) {

    if(mes === "Jan") {
      
      mes = "01"

    }else if(mes === "Feb") {
      
      mes = "02"

    }else if(mes === "Mar") {
      
      this.diaLetraHoy = "03"

    }else if(mes === "Apr") {
      
      mes = "04"

    }else if(mes === "May") {
      
      mes = "05"

    }else if(mes === "Jun") {
      
      mes = "06"

    }else if(mes === "Jul") {
      
      mes = "07"

    }else if(mes === "Aug") {
      
      mes = "08"

    }else if(mes === "Sep") {
      
      mes = "09"

    }else if(mes === "Oct") {
      
      mes = "10"

    }else if(mes === "Nov") {
      
      mes = "11"

    }else if(mes === "Dec") {
      
      mes = "12"

    }
    return mes;
    
  }

  convertirEspLetra(dia:string) {
     
    if(dia === "Sun") {
      
      dia = "D"

    }else if(dia === "Mon") {
      
      dia = "L"

    }else if(dia === "Tue") {
      
      dia = "M"

    }else if(dia === "Wed") {
      
      dia = "M"

    }else if(dia === "Thu") {
      
      dia = "J"

    }else if(dia === "Fri") {
      
      dia = "V"

    }else if(dia === "Sat") {
      
      dia = "S"

    }

    return dia;
   

  }

  traer(btn:any, fecha:string){
    this.guardado = fecha;
    this.btnGuardado = btn;

    console.log(btn+"   "+fecha);

    if(btn === 1){
      this.hoyColor = "#0200C0";
      
      this.manColor="#FFF";
      this.pasColor="#FFF";
      this.trasColor="#FFF";
      this.postColor="#FFF";

      this.hoyNumColor="#FFFF";
      this.manNumColor="#0200C0";
      this.pasNumColor="#0200C0";
      this.trasNumColor="#0200C0";
      this.postNumColor="#0200C0";
      
      
    }else if(btn == 2){
      this.manColor = "#0200C0";

      this.hoyColor="#FFF";
      this.pasColor="#FFF";
      this.trasColor="#FFF";
      this.postColor="#FFF";

      this.manNumColor="#FFF";
      this.hoyNumColor="#0200C0";
      this.pasNumColor="#0200C0";
      this.trasNumColor="#0200C0";
      this.postNumColor="#0200C0";
    }else if(btn == 3){
      this.pasColor = "#0200C0";

      this.hoyColor="#FFF";
      this.manColor="#FFF";
      this.trasColor="#FFF";
      this.postColor="#FFF";

      this.manNumColor="#0200C0";
      this.hoyNumColor="#0200C0";
      this.pasNumColor="#FFF";
      this.trasNumColor="#0200C0";
      this.postNumColor="#0200C0";
    }else if(btn == 4){
      this.trasColor = "#0200C0";

      this.hoyColor="#FFF";
      this.manColor="#FFF";
      this.pasColor="#FFF";
      this.postColor="#FFF";

      this.manNumColor="#0200C0";
      this.hoyNumColor="#0200C0";
      this.pasNumColor="#0200C0";
      this.trasNumColor="#FFF";
      this.postNumColor="#0200C0";
    }else if(btn == 5){
      this.postColor = "#0200C0";

      this.hoyColor="#FFF";
      this.manColor="#FFF";
      this.pasColor="#FFF";
      this.trasColor="#FFF";

      this.manNumColor="#0200C0";
      this.hoyNumColor="#0200C0";
      this.pasNumColor="#0200C0";
      this.trasNumColor="#0200C0";
      this.postNumColor="#FFF";
    }

    this.fecha(fecha);
  }

  completo:any;
  evento:any[];
  lleno:boolean;
  fecha(fecha:string){


    this.http.revisarfecha(fecha).then(
      (inv) => { 
       console.log(inv);     
        
       if(inv == ""){
        //arreglo vacio
        this.lleno=false;
       }else{
         //arreglo lleno
         this.lleno=true;
       }

       this.completo = inv["completo"];    
       this.evento = this.completo["evento"];

       //console.log(this.trabajadores);
      
         
      },
      (error) =>{
        console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );


  }

  mensaje:string;
  observaciones(id_evento:string,tipo:any){
    console.log(id_evento+"    tipo:   "+tipo+"    mensaje: "+this.mensaje);

    this.http.enviarObs(id_evento,tipo, this.mensaje).then(
      (inv) => { 
       console.log(inv);     
        

       this.traer(this.btnGuardado, this.guardado);
       
       
       //console.log(this.trabajadores);
      
         
      },
      (error) =>{
        console.log("Error"+JSON.stringify(error));
        alert("Verifica que cuentes con internet");
      }
    );

  }

  refresh(){
    this.traer(this.btnGuardado, this.guardado);
  }

  ngOnInit() {
  }

}
