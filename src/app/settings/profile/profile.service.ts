import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../../_helper/response-model';
import { USER_TYPE } from '../user/user';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${environment.apiUrl}/users/v1/view-profile`);
  }

  updateProfile(user: USER_TYPE): Observable<USER_TYPE> {
    if (user.profilePic?.includes('http')) user.profilePic = undefined
    return this.http.put<USER_TYPE>(`${environment.apiUrl}/users/v1/update-profile`, user);
  }

  profileImage(id: string) {
    return `${environment.apiUrl}/Users/profile/image/${id}`;
  }
}
