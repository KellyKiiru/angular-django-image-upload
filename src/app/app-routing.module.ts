import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewImageComponent } from './view-image/view-image.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { AllProfilesComponent } from './components/all-profiles/all-profiles.component';
import { CloudinaryUploadComponent } from './components/cloudinary-upload/cloudinary-upload.component';

const routes: Routes = [
  {path:'view-image', component: ViewImageComponent},
  {path:'upload-image', component:UploadImageComponent},
  {path:'create-profile', component:CreateProfileComponent},
  {path:'profiles', component:AllProfilesComponent},
  {path:'cloudinary', component:CloudinaryUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
