import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module'
import { PrincipalComponent } from './pages/principal/principal.component';
import { AcercaComponent } from './pages/acerca/acerca.component';





@NgModule({
  declarations: [
    PrincipalComponent,
    AcercaComponent,



  ],

  imports: [
    CommonModule,
    RouterModule,
    SharedModule,


  ],

  exports: [
    PrincipalComponent,
    AcercaComponent,


  ],

})
export class ComponentsModule { }
