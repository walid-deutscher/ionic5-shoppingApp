import { Component } from '@angular/core';
import{AngularFirestore} from'@angular/fire/firestore';
 import{ Router} from '@angular/router' ;
 import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items:any;
  test:boolean;
  action:any ;
  constructor(
    
    private nativePageTransitions: NativePageTransitions ,
    public rt:Router ,public frs:AngularFirestore) {

    this.test=true;
  }

  ngOnInit(){
    this.test=true;
 this.getptodcut("");

 //this.rt.navigate(['msg']);


  }


onSearchChange(e){
     let value = e.detail.value;

  console.log("oui") ;
      
         console.log("oui") ;
      this.getptodcut(value.trim()) ;
    

    }
  getptodcut(key?:string){
 
this.frs.collection('shop',
//ref =>  ref.where("titre",">=",key).where("titre","<=",key+'\uf8ff').limit(20)
ref =>  ref.orderBy('titre').startAt(key) 


  ).snapshotChanges().subscribe(data=>{

this.items= data.map(e=>{

return{
  id:e.payload.doc.id ,
  titre :e.payload.doc.data()['titre'] ,
  discription  :e.payload.doc.data()['discription'] ,
  phone :e.payload.doc.data()['phone'] ,
  Adresse:e.payload.doc.data()['Adresse'] ,
  cat:e.payload.doc.data()['cat'] ,
  prix: e.payload.doc.data()['prix'] ,
  urlimageone:e.payload.doc.data()['urlimageone'] ,
  urlimagetwo:e.payload.doc.data()['urlimagetwo'] ,
  urlimagethree:e.payload.doc.data()['urlimagethree'],
  datt:e.payload.doc.data()['datt'] ,
  par:e.payload.doc.data()['par']


}  
console.log(this.items) ;

})

})
  }


  go(item:any){
    this.test=false;
    let TIME_IN_MS = 100;
 setTimeout( () => {
   this.slide();
  this.rt.navigate(['/list'],{

    queryParams:item 
    
     });
}, TIME_IN_MS);

  }
  ionViewDidEnter() {

    this.test=true;
}

slide() {

  let options: NativeTransitionOptions = {
     direction: 'up',
     duration: 300,
     slowdownfactor: 3,
     slidePixels: 20,
     iosdelay: 100,
     androiddelay: 150,
     fixedPixelsTop: 0,
     fixedPixelsBottom: 60
    }
    this.nativePageTransitions.flip(options);
 
 }


}