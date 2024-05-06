import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { TabMenuModule } from 'primeng/tabmenu';
import { TooltipModule } from 'primeng/tooltip';
@NgModule({
  declarations: [],
  exports:[
    RippleModule,
    ToastModule,
    TabMenuModule,
    TooltipModule,
  ]
})
export class PrimengModule { }
