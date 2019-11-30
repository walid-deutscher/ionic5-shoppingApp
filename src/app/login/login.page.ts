import { Component, OnInit } from '@angular/core';
import{  AngularFireAuth}  from'@angular/fire/auth';
import{Router} from'@angular/router';
import { MenuController } from '@ionic/angular';
import{ AuthService} from'../auth/auth.service' ;
import{ usersOptions} from'../auth/auth.service' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
user:usersOptions={email:"",password:""}
email:string ="";

singupbtn:boolean ;
loginbtn:boolean ;
  constructor(
    public authservice:AuthService,
    public MenuController:MenuController ,
   public rt:Router,public ath:AngularFireAuth) { 
      this.loginbtn=true;
 

    
 
  }

  ngOnInit() {

 
  }


 Login() {

   this.singupbtn=false;
   this.loginbtn=true;

 }
  Singup(){
   this.singupbtn=true;
   this.loginbtn=false;

  }
     inscri(){
       this.authservice.createNewUser(this.user);

     }

  async login(){

    this.authservice.Login(this.user);

  }

  

  ionViewDidEnter() {
 
  }
 


sendpass(){

   this.ath.auth.sendPasswordResetEmail(this.email)
      .then(() => {
 this.authservice.showTaost("||*  Le lien de  mot de pass a et envoyer *||");

      }, 
      (error) => {

 this.authservice.showTaost(error['message']);

      })
}
}


