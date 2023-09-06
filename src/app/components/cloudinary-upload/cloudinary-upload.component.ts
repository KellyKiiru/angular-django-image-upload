import { Component, OnInit } from '@angular/core';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { Transformation } from '@cloudinary/url-gen';

// import required actions
import { thumbnail, scale } from '@cloudinary/url-gen/actions/resize';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import { sepia } from '@cloudinary/url-gen/actions/effect';
import { source } from '@cloudinary/url-gen/actions/overlay';
import { opacity, brightness } from '@cloudinary/url-gen/actions/adjust';
import { byAngle } from '@cloudinary/url-gen/actions/rotate';

// import required qualifiers
import { image } from '@cloudinary/url-gen/qualifiers/source';
import { Position } from '@cloudinary/url-gen/qualifiers';
import { compass } from '@cloudinary/url-gen/qualifiers/gravity';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn';



@Component({
  selector: 'app-cloudinary-upload',
  templateUrl: './cloudinary-upload.component.html',
  styleUrls: ['./cloudinary-upload.component.css']
})
export class CloudinaryUploadComponent implements OnInit{

  img!: CloudinaryImage;

  ngOnInit(): void {

    // create a cloudinary instance, setting some cloud and URL configuration
    const cld = new Cloudinary({
      cloud:{
        cloudName:'demmo'
      }
    });

    // cld.image returns a CloudinaryImage with the configuration set
    this.img = cld.image('sample')

    // the url of the image is https://res.cloudinary.com/demo/image/upload/sample
  }
}
