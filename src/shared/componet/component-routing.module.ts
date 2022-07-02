import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompUploadResumeComponent } from './comp-upload-resume/comp-upload-resume.component';
const routes: Routes = [
    { path: 'uploadresume', component: CompUploadResumeComponent },
]
    
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ComponentRoutingModule { }