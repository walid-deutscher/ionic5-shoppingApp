import { Injectable } from '@angular/core';
import { CanActivate ,Router } from '@angular/router';
 import{AuthService } from '../auth/auth.service';
 

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
 
   constructor(public route:Router ,public auth:AuthService) {
 
   }
 
    
  canActivate(): boolean {
    if(this.auth.isAuthenticated()){
   
   
    
    }

    else{
      this.route.navigate(['/login']);
    

    }

    return this.auth.isAuthenticated();
  
  }
}



 