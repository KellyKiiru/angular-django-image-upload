import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewImageComponent } from './view-image/view-image.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

const routes: Routes = [
  {path:'view-image', component: ViewImageComponent},
  {path:'upload-image', component:UploadImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
