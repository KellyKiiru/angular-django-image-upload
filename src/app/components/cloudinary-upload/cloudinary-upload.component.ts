import { Component, OnInit } from '@angular/core';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { Transformation } from '@cloudinary/url-gen';

// import required actions
import { thumbnail, scale } from '@cloudinary/url-gen/actions/resize';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import { sepia } from '@cloudinary/url-gen/actions/effect';
import { source } from '@cloudinary/url-gen/actions/overlay';
import { opacity, brightness, Adjust } from '@cloudinary/url-gen/actions/adjust';
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
        cloudName:'demo'
      }
    });

    // cld.image returns a CloudinaryImage with the configuration set
    // 'sample' is the public ID
    // the url of the image is https://res.cloudinary.com/demo/image/upload/sample
    this.img = cld.image('sample')

    // apply the transformation
    this.img
    .resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face()))) //crops the image
    .roundCorners(byRadius(20)) // Round the corners.
    .effect(sepia()) // Apply a sepia effect. // Overlay the Cloudinary logo.
    .overlay(  // Overlay the Cloudinary logo.
      source(
        image('cloudinary_icon_blue')
        .transformation(new Transformation()
        .resize(scale(50)) //resize logo
          .adjust(opacity(60)) //adjust opacity of logo
        .adjust(brightness(200)) //adjust brightness of logo
        )
      )
      .position(new Position().gravity(compass('south_east')).offsetX(5).offsetY(5))
    )
    .rotate(byAngle(350)) //rotate the result
    .format('png'); //deliver as PNG 
  }
}
