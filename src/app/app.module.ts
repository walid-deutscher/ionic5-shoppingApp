import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import{environment} from'../environments/environment'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import{AngularFireModule}  from'angularfire2';
import{AngularFirestoreModule, AngularFirestore} from'angularfire2/firestore' ;
import{AngularFireStorageModule}  from'angularfire2/storage';
import{  AngularFireAuthModule}  from'@angular/fire/auth';
import { HomePage } from './home/home.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { IonicStorageModule } from '@ionic/storage';
 import { NativePageTransitions  } from '@ionic-native/native-page-transitions/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot() ,

    AngularFireModule.initializeApp(environment.firebaseConfig) ,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AppRoutingModule ,
    AngularFireAuthModule
  ],
  providers: [
    UniqueDeviceID,
    SocialSharing,
    StatusBar,
    SplashScreen,
    NativePageTransitions ,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule {}
