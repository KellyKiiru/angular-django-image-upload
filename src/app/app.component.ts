import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { SettingsService } from './settings.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  

  readonly ROOT_URL = "http://localhost:8000/upload/image/"
  constructor(private http:HttpClient, setting:SettingsService){

  }


  uploadedImage!: File;
  dbImage:any;
  postResponse:any;
  successResponse!: string;
  image:any;
  setting!:SettingsService;


  public onImageUpload(event:any){
    this.uploadedImage = event.target.files[0]
  }

  imageUploadAction(){
    const imageFormData = new FormData();
    imageFormData.append('image',this.uploadedImage, this.uploadedImage.name)

    this.http.post('http://localhost:8000/upload/image/',imageFormData,{observe:'response'}).subscribe((response)=>{
      if (response.status === 200){
        this.postResponse = response;
        this.successResponse = this.postResponse.body.message;
      } else {
        this.successResponse = 'Image not uploaded due to some error'
      }
    });
  }

  viewImage() {
    this.http.get(this.ROOT_URL + this.image).subscribe(
        res => {
          this.postResponse = res;
          this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
        }
      );
  }

  ngOnInit(): void {
    this.imageUploadAction();
    this.viewImage();
  }


    // console.log(this.setting.snippet)
  }