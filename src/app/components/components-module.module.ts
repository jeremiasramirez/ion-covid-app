import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponent } from './global/global.component';



@NgModule({
  declarations: [
    
    GlobalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GlobalComponent
  ]
})
export class ComponentsModuleModule { }
