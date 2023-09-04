import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Profile } from 'src/app/models/profiles';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  form!: FormGroup;
  profile!:Profile;
  imageData!:any;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name : new FormControl(null),
      image : new FormControl(null),
    })
  }

  onFileSelect(event:Event){
    console.log('file selected')
    const file = (event?.target as HTMLInputElement).files?.[0];
    this.form.patchValue({image:file});
    const allowedMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];

    if(file && allowedMimeTypes.includes(file.type)){
      const reader = new FileReader();
      console.log("Image is ready")
      reader.onload = ()=>{
        this.imageData = reader.result as string
      };
      reader.readAsDataURL(file);
    }
  };

  onSubmit(){
    this.form.reset();
    this.imageData = null;

  }
}
