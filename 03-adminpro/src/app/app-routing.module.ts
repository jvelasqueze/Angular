import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos
import { PagesRoutingModule } from './auth/pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

 '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const router: Routes = [
 
    // path: '/dashboard' PagesRouting
    // path: '/auth' AuthRouting
    {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {path: '**', component: NopagefoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( router ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
exports: [ RouterModule]

})
export class AppRoutingModule { }
