import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Platform  } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from 'src/environments/environment';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import{ Router} from '@angular/router' ;
import{  AngularFireAuth}  from'@angular/fire/auth';
import { MenuController } from '@ionic/angular';
import{  AuthService} from'./auth/auth.service' ;

 
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  logoutitem:boolean ;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    } ,
    {
      title: 'Ajouter un produit',
      url: '/add-product',
      icon: 'add'
    }
  
  ];

  constructor(
    private alertController:AlertController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private soc :SocialSharing,
    public id:UniqueDeviceID ,
    public Router:Router,
   public  frah:AngularFireAuth,
   public MenuController:MenuController ,
   public auth:AuthService,
   private storage: Storage,
 
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
 
     


     
      
    
    });
  }



  async ok(){
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: ' <strong>vous  voulez vraiment quitter  Application</strong>!!!',
      buttons: [
        {
          text: 'no',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
        
          }
        }, {
          text: 'oui',
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    });

    await alert.present();

  
  }
  share(){
    this.platform.ready().then(() => {
   
    this.id.get().then(id=>{
      this.soc.share("bonjour a notre chope", "https://play.google.com/store/apps/details?id="+id, null, null);


    } ) 
  
  });

    
  }
  


  Logout(){
 this.auth.Logout();
 this.MenuController.close();
  }
  ionViewDidEnter() {
   
    

   }

   menuOpened(){
    this.logoutitem=this.auth.isAuthenticated() ;
    }
 
}
