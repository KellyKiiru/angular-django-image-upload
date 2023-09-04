import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    ViewImageComponent,
    UploadImageComponent,
    CreateProfileComponent,
    AllProfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideClientHydration(),ConfigService,SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
