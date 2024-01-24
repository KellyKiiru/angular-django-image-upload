import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Profile } from '../models/profiles';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  private profiles: Profile[] =[];

  private profiles$ = new Subject<Profile[]>()

  readonly url = 'http://127.0.0.1:8000/get/image/info/vdsa/';

  constructor(private http:HttpClient) { }

  getProfiles(){
    this.http.get<{ profiles : Profile[] }>(this.url).pipe(
      map((profileData) => {
        return profileData.profiles
      })
    ).subscribe((profiles)=>{
        this.profiles = profiles;
        this.profiles$.next(this.profiles)
    })
  }

  getProfilesStream(){
    return this.profiles$.asObservable();
  }
}
