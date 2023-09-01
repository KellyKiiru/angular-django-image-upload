import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent{

  constructor(private httpClient: HttpClient) { }

  uploadedImage!: File;
  dbImage:any;
  postResponse:any;
  successResponse!: string;
  image:any;

  public onImageUpload(event:any){
    this.uploadedImage = event.target.files[0]
  }

  imageUploadAction(){
    const imageFormData = new FormData();
    imageFormData.append('image',this.uploadedImage, this.uploadedImage.name)

    this.httpClient.post('http://127.0.0.1:8000/upload/image/', imageFormData, {observe:'response'}).subscribe((response)=>{
      if (response.status === 200){
        this.postResponse = response;
        this.successResponse = this.postResponse.body.message;
      } else {
        this.successResponse = 'Image not uploaded due to some error'
      }
    });
  }
}
