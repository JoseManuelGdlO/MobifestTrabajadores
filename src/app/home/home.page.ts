import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpService } from '../http.service';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario:any;
  contra:any;
  recuerdame:boolean=false;
  

  constructor(public router:Router, public storage: Storage, public http:HttpService, public toastCtrl:ToastController, public loadingCtrl:LoadingController){
    storage.get('CONTRA').then((val) => {
      this.contra=val;
    });

    storage.get('USER').then((val) => {
      this.usuario=val;
    });
 }

 


async entrar(){
  const loading = await this.loadingCtrl.create({
    message: 'Iniciando Sesion...',
    duration: 2000
  });
  await loading.present();

   if(this.recuerdame==true){
    this.storage.set('USER', this.usuario);
    this.storage.set('CONTRA', this.contra);
   }
   

  


  this.http.login(this.usuario,this.contra).then(
    async (data) => { 
      console.log(data)  


      await loading.onDidDismiss();

      

      var json = data["Usuario"];
       //console.log("este es el json: "+json);

       var id;
       for (var i = 0; i < json.length; i++) {
       // console.log(json[i].nombre_mob);
       //guardamos rol y id en variables
      
       id=json[i].id_usuario;
       }

        if(id != 0){
            
          this.router.navigateByUrl('/principal');

        }else{
          this.presentToast(); 
        }   
      
        
        

     
    },
    async (error) =>{
      console.log("Error"+JSON.stringify(error));
      this.internetToast();
      await loading.onDidDismiss();
    }
  );
}


async presentToast() {
  const toast = await this.toastCtrl.create({
    message: 'El Usuario y/o la Contraseña no existen',
    duration: 3000,
    position: 'top'
  });

  toast.present();
}


async internetToast() {
  const toast = await this.toastCtrl.create({
    message: 'Verifica que cuentes con Internet',
    duration: 3000,
    position: 'top'
  });

  toast.present();
}


}
