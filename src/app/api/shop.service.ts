import { Injectable } from '@angular/core';
import{AngularFirestore} from'@angular/fire/firestore' ;

import{ MenuController} from '@ionic/angular'
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor( public Mncrtl:MenuController, private frs:AngularFirestore) { }

 Add_product(data_will_add:any,table:string)   {

console.log(data_will_add);
  return this.frs.collection(table).add(data_will_add)  
 
                                                 }
   getUserid():string{
   return localStorage.getItem('key');
   }

   getdataFromTable(table:string){
      return this.frs.collection(table,
ref => ref.where('par', '==',this.getUserid()));
   }

   getdataFromMessages(table:string,action:string){
    return this.frs.collection(table,
ref => ref.where(action, '==',this.getUserid()));
 }

   getTimeNow():string{
    let today= new Date();
     return today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
   }
   openMenu(){
   
    this.Mncrtl.enable(true); 
    this.Mncrtl.open();
     
    
    
    
  }

   DeleteElementFromTable(table:string,id:string){
      this.frs.doc(table+'/'+id).delete() ;
   }
  
}



export  interface ProductOptions {
      titre :string ,
      discription  :string ,
      phone :string ,
      Adresse:string ,
      cat:string ,
      par:string,
      prix: string,
      urlimageone:string ,
      urlimagetwo:string ,
      urlimagethree:string,
      datt: string,
}


export  interface MessagesOptions {
  titre :string ,
  content  :string ,
  to_user:string ,
  from_user:string ,

 
}


