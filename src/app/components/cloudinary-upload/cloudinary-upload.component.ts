import { Component, OnInit } from '@angular/core';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';

@Component({
  selector: 'app-cloudinary-upload',
  templateUrl: './cloudinary-upload.component.html',
  styleUrls: ['./cloudinary-upload.component.css']
})
export class CloudinaryUploadComponent implements OnInit{

  img!: CloudinaryImage;

  ngOnInit(): void {

    // create a cloudinary instance, setting some cloud and URL configuration

  }
}
