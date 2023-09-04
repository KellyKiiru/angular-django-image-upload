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
  imageData!:string;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name : new FormControl(null),
      image : new FormControl(null),
    })
  }

  onSubmit(){
    console.log(this.profile)
  }

  onFileSelect(event:Event){
    console.log("file selected")
  }
}
