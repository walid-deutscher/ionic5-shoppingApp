import { Component, OnInit } from '@angular/core';
 import{ Router ,ActivatedRoute} from '@angular/router' ;

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
   thiss:any;
   constructor( private rt:Router,public actr:ActivatedRoute) {
  
  }

  ngOnInit() {
    this.actr.queryParams.subscribe(data=>{
      console.log(data);
            this.thiss=data ;
            
            })
             
  }
   sendMsg(){

     
    this.rt.navigate(['msg'],{

      queryParams:this.thiss
      
       });
   }
}
