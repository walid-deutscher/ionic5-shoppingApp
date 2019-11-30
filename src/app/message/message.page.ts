import { Component, OnInit } from '@angular/core';
import{ ShopService} from'../api/shop.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
table:string="messages" ;
messages:any ;
messagess:any;
action:string;

  constructor(public api:ShopService) { }

  ngOnInit() {
    this.getMessage();

    this.getMessager();

  }



  getMessage(){
    this.action="to_user";
    this.api.getdataFromMessages(this.table,this.action).snapshotChanges().subscribe(data=>{
      this.messages= data.map(e=>{

        return{
          id:e.payload.doc.id ,
          titre :e.payload.doc.data()['titre'] ,
          content :e.payload.doc.data()['content'] ,
          from_user :e.payload.doc.data()['from_user'] ,
          to_user:e.payload.doc.data()['to_user'] ,
           
        
        } 
    });
  
  });
  }


show(data){
alert(data);
}

  
  getMessager(){
    this.action="from_user";
    this.api.getdataFromMessages(this.table,this.action).snapshotChanges().subscribe(data=>{
      this.messagess= data.map(e=>{

        return{
          id:e.payload.doc.id ,
          titre :e.payload.doc.data()['titre'] ,
          content :e.payload.doc.data()['content'] ,
          from_user :e.payload.doc.data()['from_user'] ,
          to_user:e.payload.doc.data()['to_user'] ,
           
        
        } 
    });
    console.log(this.messages);
  });
  }

}
