import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataSets, Sale } from './dashboard';
import { httpOptions } from '../dine-in/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  private uri = '/dashboard/v1';
  private apiUrl = 'http://localhost:5000/sale';
  

  Getchartinfo(){
    return this.http.get("http://localhost:5000/sale");
    
  }
  
  put(id: number, data: Sale): Observable<Sale> {
    console.log("put data::::",data);
    const url = `${this.apiUrl}/${id}`
    const newOder = {
      order: data
    }
    return this.http.put<Sale>(url, data, httpOptions);
  }
  
}
