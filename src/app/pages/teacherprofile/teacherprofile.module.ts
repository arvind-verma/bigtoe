import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {TeacherprofileComponent} from './teacherprofile.component';
 
const TEACHER_PROFILE_ROUTE = [{path :"", component: TeacherprofileComponent}]

@NgModule({
  declarations: [TeacherprofileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TEACHER_PROFILE_ROUTE)
  ]
})
export class TeacherprofileModule { }
