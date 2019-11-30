import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MyheadComponent} from'./myhead/myhead.component';


@NgModule({
  declarations: [ MyheadComponent],
  imports: [
    CommonModule,
   
   
  ]
  ,
  exports:[
    MyheadComponent
  ]
})
export class SharedModule { }
