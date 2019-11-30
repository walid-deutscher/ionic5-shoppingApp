import { Injectable } from '@angular/core';
import{  AngularFireAuth}  from'@angular/fire/auth';
import{LoadingController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import{Router} from'@angular/router';
import{BehaviorSubject } from'rxjs';
import { MenuController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState=new BehaviorSubject(false);
  constructor( public route:Router, public toastController:ToastController,   public LoadingController:LoadingController ,private auth:AngularFireAuth) {

  this.Cheklogin();
   }

    

  async Login(data:{email,password}){
    localStorage.clear();
    const ld= await this.LoadingController.create({message:"Attendez"})
        
    
        ld.present();
        
   
       this.auth.auth.signInWithEmailAndPassword(data.email,data.password).then(
    data=>
    {

console.log(data);
      localStorage.setItem('key',data.user.uid);
         this.route.navigate(['/home']);
      ld.dismiss();



      },err=>{

        this.showTaost("Erreur d'authentification ");
        ld.dismiss();

      }) 

    }

  


      createNewUser(data:{email,password}) {
         
            this.auth.auth.createUserWithEmailAndPassword(data.email, data.password).then(data=>{

                  this.showTaost(" || * le compte est bien cree Connectez Vous *||");
 
            },data=>{
               this.showTaost(data["message"]);
            });

               
    }



  Logout(){   
      this.auth.auth.signOut();
      localStorage.removeItem('key');
      this.authState.next(false);
      this.route.navigate(['/login']);

   
   
  }


  Cheklogin(){

   
    if(localStorage.getItem('key')){
        this.authState.next(true);
    }
    else{
      this.authState.next(false);
    }
  }




  async showTaost(msg:string){
    const toast = await this.toastController.create({
      message: '<p style="padding: 15px;"> '+msg+'</p>',
      duration: 2000
    });

    toast.present();
  }



isAuthenticated(){
  this.Cheklogin();
  return this.authState.value;
}

getemail(){
  return this.auth.auth.currentUser.email ;
}
}


export interface usersOptions{

  email:string,
  password:string,
}