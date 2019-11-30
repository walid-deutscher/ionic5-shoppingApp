import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate ,Router } from '@angular/router';
import{AuthService } from './auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoGuard implements   CanActivate {
   

  test:boolean ;
  constructor(public route:Router ,public auth:AuthService) {
 
  }



  canActivate(): boolean {

    console.log("eee"+this.auth.isAuthenticated());
    if(this.auth.isAuthenticated()){
       this.test=false;
       this.route.navigate(["/home"]);
    
    }

    else{


      this.test=true ;
    }

console.log(this.test);
    return  this.test;


  }
    
}
