import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';
import { CloudinaryModule } from '@cloudinary/ng';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViewImageComponent } from './view-image/view-image.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ConfigService } from './config.service';
import { SettingsService } from './settings.service';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { AllProfilesComponent } from './components/all-profiles/all-profiles.component';
import { ProfilesService } from './services/profiles.service';
import { CloudinaryUploadComponent } from './components/cloudinary-upload/cloudinary-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewImageComponent,
    UploadImageComponent,
    CreateProfileComponent,
    AllProfilesComponent,
    CloudinaryUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CloudinaryModule
  ],
  providers: [provideClientHydration(),ConfigService,SettingsService,ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
