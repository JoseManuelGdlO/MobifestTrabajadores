import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }


  login(usuario:string, contra:string){
 
    //alert(usuario+contra);
   
   var url = 'http://avisositd.xyz/mobiliaria/loginMobiliaira.php?usuario='+usuario+'&contra='+contra;
   return new Promise((resolve, reject) => {
    this.http.get(url)
       .subscribe(data => {
         resolve(data);
        }, (err) =>{
          reject(err);    
        });
   });
  }

  revisarfecha(fecha:string){
 
    //alert(usuario+contra);
   
   var url = 'http://avisositd.xyz/mobiliaria/phpAndroid/ListaEventosInv.php?fecha='+fecha;
   return new Promise((resolve, reject) => {
    this.http.get(url)
       .subscribe(data => {
         resolve(data);
        }, (err) =>{
          reject(err);
        });
   });
  }

  enviarObs(id:string, tipo:string, mensaje:string){
 
    //alert(usuario+contra);
   
   var url = 'http://avisositd.xyz/mobiliaria/phpAndroid/confirmarMobil.php?entregado=1&tipo='+tipo+"&id="+id+"&mensaje="+mensaje;
   return new Promise((resolve, reject) => {
    this.http.get(url)
       .subscribe(data => {
         resolve(data);
        }, (err) =>{
          reject(err);
        });
   });
  }

}
