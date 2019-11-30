import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule} from'../shared/shared.module' ;

import { ListPage } from './list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ])
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
