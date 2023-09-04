import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Profile } from 'src/app/models/profiles';
import { ProfilesService } from 'src/app/services/profiles.service';

@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.css']
})
export class AllProfilesComponent implements OnInit, OnDestroy {

  profiles: Profile[] =[]

 

 constructor(private profileService : ProfilesService,  private profileSubscription:Subscription){}

    ngOnInit(): void {
      this.profileService.getProfiles();
      this.profileSubscription = this.profileService.getProfilesStream().subscribe((profiles:Profile [])=>{
        this.profiles = profiles
      })
    }

    ngOnDestroy(): void {
      this.profileSubscription.unsubscribe();
    }
}
