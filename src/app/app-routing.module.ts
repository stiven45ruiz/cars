import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { JdmComponent } from './jdm/jdm.component';
import { EuroComponent } from './euro/euro.component';
import { AmericanComponent } from './american/american.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'jdm',
    component: JdmComponent,
  },
  {
    path: 'euro',
    component: EuroComponent,
  },
  {
    path: 'american',
    component: AmericanComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
