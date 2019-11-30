import { Component, OnInit } from '@angular/core';
import{AngularFirestore} from'@angular/fire/firestore' ;
import{AngularFireStorage,AngularFireUploadTask} from '@angular/fire/storage';
import{LoadingController} from '@ionic/angular'
import { AlertController } from '@ionic/angular';
import{Router} from'@angular/router';
import{  AngularFireAuth}  from'@angular/fire/auth';
import { MenuController } from '@ionic/angular';
import {ShopService} from'../api/shop.service';

import{ProductOptions} from'../api/shop.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})

export class AddProductPage implements OnInit {
  task:AngularFireUploadTask;
  fname:string;
  table:string="shop" ;
  showlist:boolean=false;
  showadd:boolean=false;
  product:ProductOptions={
  
    titre :"" ,
    discription  :"" ,
    phone :"",
    Adresse:"" ,
    cat:"" ,
    par:this.shopService.getUserid(),
    prix:"",
    urlimageone:"" ,
    urlimagetwo:"" ,
    urlimagethree:"",
    datt: "",
  
  
  
  };

  prodcuts:any;
    
  constructor(
    public  MenuController: MenuController,
    public AlertController:AlertController,
    public shopService:ShopService,
    public aut: AngularFireAuth,public rt:Router,public frs: AngularFirestore,public ld : LoadingController ,public str:AngularFireStorage) { 
 
 
 
console.log(this.shopService.getUserid());
  }

  
 async  upfile(event:FileList,imag:number){
  const ld=  await this.ld.create({message:" Chargement de foto"});
  ld.present();
    const file= event.item(0);
    if(file.type.split('/')[0]!=='image'){
       return;


    }

console.log(file.size);
this.fname=file.name;
const path = `freakyStorage/${new Date().getTime()}_${file.name}`;
const frefrence= this.str.ref(path);
this.str.upload(path,file).then(()=>{
 frefrence.getDownloadURL().subscribe(url=>{
  console.log(imag) ;
  console.log(url)
   switch (imag) {
     case 1:
      this.product.urlimageone=url;
     break;
     case 2:
       this.product.urlimagetwo= url;
    break;
    case 3: 
   this.product.urlimagethree=url;  
     break;
     default:
       break;
   }
 
 ld.dismiss();

 },errror=>{
  ld.dismiss();
 })
  
})
 

 




 

   }

  async Add_product(){
 this.product.datt=this.shopService.getTimeNow();
 
    const ld=  await this.ld.create({message:"Chargement"});
    ld.present();
    this.shopService.Add_product(this.product,this.table).then(data=>{
      console.log(data);
      ld.dismiss();
      this.ShowList();
     
    }).catch( error=>{
      ld.dismiss();
      console.log(error);
    }
    
    );

 
 
   }
  ngOnInit() {
  
  
    this.getproduct();
 
  }


  getproduct(){
    this.shopService.getdataFromTable(this.table).snapshotChanges().subscribe(data=>{
      console.log(data) ;
          
 this.prodcuts= data.map(e=>{


  return{
        id:e.payload.doc.id ,
        titre :e.payload.doc.data()['titre'] ,
        discription  :e.payload.doc.data()['discription'] ,
        phone :e.payload.doc.data()['phone'] ,
        Adresse:e.payload.doc.data()['Adresse'] ,
        cat:e.payload.doc.data()['cat'] ,
        par:e.payload.doc.data()['par'] ,
        prix: e.payload.doc.data()['prix'] ,
        urlimageone:e.payload.doc.data()['urlimageone'] ,
        urlimagetwo:e.payload.doc.data()['urlimagetwo'] ,
        urlimagethree:e.payload.doc.data()['urlimagethree'],
        datt:e.payload.doc.data()['datt']

  }
      })



    });
  }


async  del(id){

   const las=  await this.ld.create({message:"Supression"}) ;
   las.present();
  this.shopService.DeleteElementFromTable(this.table,id) ;
   las.dismiss();

  }


  ionViewDidEnter() {
  
  }

  async res(id){
    let res:boolean=false;
    const alert = await this.AlertController.create({
      header: 'Confirm!',
      message: ' <strong>vous  voulez vraiment </strong>!!!',
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
            if(id=="walid"){
     this.Add_product();
            }
     else{
      this.del(id);
     }
          }
        }
      ]
    });

    await alert.present();
 
  }

  ShowList(){
     this.clear();
    this.showlist=true;
    this.showadd=false;
  }

 ShowAdd(){
  this.showlist=false;
    this.showadd=true;
  }



  clear(){
     this.product={
  
    titre :"" ,
    discription  :"" ,
    phone :"",
    Adresse:"" ,
    cat:"" ,
    par:this.shopService.getUserid(),
    prix:"",
    urlimageone:"" ,
    urlimagetwo:"" ,
    urlimagethree:"",
    datt: "",
  
  
  
  };
  }
}

