import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { HomeComponent } from './components/home/home.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  // default path:
 {path:'main',component:MainlayoutComponent,children:[
  {path:'',redirectTo:'/Home',pathMatch:'full'},

  {path:'Home',component: HomeComponent},
  {path:'About',component:AboutUsComponent },
  {path:'Contact',component:ContactUsComponent },
  {path:'Products',component: ProductsComponent},

  {path:'Products',component: ProductsComponent},
 ]},
{path:'**',component: NotfoundComponent}//wildcard path

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
