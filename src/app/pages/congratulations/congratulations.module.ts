import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule, Router} from '@angular/router';
import { CongratulationsComponent } from './congratulations.component';

const CONGRATS = [{path:'',component:CongratulationsComponent}]
@NgModule({
  declarations: [CongratulationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CONGRATS)
  ]
})
export class CongratulationsModule { }
