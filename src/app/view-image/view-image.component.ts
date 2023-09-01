import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ConfigService } from '../config.service';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent implements OnInit{
  title = "View image";

  // constructor(private httpClient:HttpClient) {};

  name:string = 'Test display image';
  thumbnail: any;
  constructor(private config: ConfigService,public setting:SettingsService, private sanitizer: DomSanitizer, private httpClient:HttpClient) { }
 
  ngOnInit() {
     this.config.getData()
      .subscribe((baseImage : any) => {
        //alert(JSON.stringify(data.image));
        let objectURL = 'data:image/jpeg;base64,' + baseImage.image;

         this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
       
      });
    //console.log(this.setting.snippet)
    
  }

  uploadedImage!: File;
  postResponse:any;
  successResponse!: string;
  image: any;

  viewImage() {
    return this.httpClient.get(`http://127.0.0.1:8000/get/image/info/${this.image}/`,{observe:'response'}).subscribe((res) => {
          console.log(res);
          this.postResponse = res;
          this.dbImage = `data:image/jpeg;base64,${this.postResponse.image}`;

          console.log("fdbniisanvjk");
          console.log(this.dbImage);
        }
      );
  };
  
  dbImage:any;
}
