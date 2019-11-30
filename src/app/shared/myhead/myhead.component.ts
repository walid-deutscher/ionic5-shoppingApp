import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ ShopService } from"../../api/shop.service" ;

@Component({
  selector: 'myhead',
  templateUrl: './myhead.component.html',
  styleUrls: ['./myhead.component.scss'],
})
export class MyheadComponent implements OnInit {

  constructor(public rt:Router,public menu:ShopService) { }

  ngOnInit() {}

  click(){
    
   this.menu.openMenu();

  }
gomessagePage(){

  this.rt.navigateByUrl("message");

}
}
