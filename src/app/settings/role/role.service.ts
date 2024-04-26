import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { role } from './role';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class RoleService {
 
  constructor(private http:HttpClient) { }

  uri = "/user/param/v1";
  private apiUrl = 'http://localhost:5000/role';
  
  
  gets(): Observable<role[]> {
    return this.http.get<role[]>(this.apiUrl);
  }
  
  post(data: role): Observable<role[]> {
    return this.http.post<role[]>(this.apiUrl, data ,httpOptions);
  }
  put(data: role): Observable<role[]> {
    const url = `${this.apiUrl}/${data.id}`
    // let url = 'http://localhost:5000/table/' + data.id ;
    return this.http.put<role[]>(url, data ,httpOptions);
  }
  
  delete(data:role): Observable<role[]>{
    const url = `${this.apiUrl}/${data.id}`
    
    // let url = 'http://localhost:5000/table/' + data.id ;
    return this.http.delete<role[]>(url ,httpOptions);
  }
  
}
