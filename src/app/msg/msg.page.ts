import { Component, OnInit } from '@angular/core';
import {ShopService,MessagesOptions} from'../api/shop.service';
import{ Router ,ActivatedRoute} from '@angular/router' ;
import {AuthService } from'../auth/auth.service';
@Component({
  selector: 'app-msg',
  templateUrl: './msg.page.html',
  styleUrls: ['./msg.page.scss'],
})
export class MsgPage implements OnInit {
 message:MessagesOptions={from_user:this.msg.getUserid(),to_user:"",content:"",titre:this.auth.getemail()};
 table="messages" ;
 produi:any;
  constructor(public auth:AuthService, private rt:Router, public msg:ShopService, public actr:ActivatedRoute) { }

  ngOnInit() {
 
    this.actr.queryParams.subscribe(data=>{
      
            this.message.to_user=data.par;
            this.produi=data.titre ;
            }) ;


           // this.message.titre=this.auth.getemail();

  }

  envoyer(){
    let content=this.message.content;
    let text = " --Message a propos de votre produit:--\n"+"*"+this.produi+"*"+"\n"
    + content  +"\n \n" +"Date :"+this.msg.getTimeNow()+"\n"
    +"Envoyer par:"+ this.message.titre ;
    ;
   
    this.message.content=text ;
    this.msg.Add_product(this.message,this.table).then(data=>{
      console.log(data);
      this.auth.showTaost("merci pour votre commentaire ");
      this.rt.navigate(['']);
    })
  
  }

}
