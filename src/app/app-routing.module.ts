import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService} from './services/auth-guard.service';
import { LoGuard} from './lo.guard';
 const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) ,
  },
  { path: 'add-product', loadChildren: './add-product/add-product.module#AddProductPageModule', canActivate:[AuthGuardService] 
},

  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule), 
  },
  { path: 'msg', loadChildren: './msg/msg.module#MsgPageModule', canActivate:[AuthGuardService] 
},
  { path: 'message', loadChildren: './message/message.module#MessagePageModule'  , canActivate:[AuthGuardService] 
},
{ path: 'login', loadChildren: './login/login.module#LoginPageModule' ,  canActivate:[LoGuard]
}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
