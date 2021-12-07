import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Results> {
    return this.http.get<Results>('https://randomuser.me/api/?results=10');
  }
}

export interface Results {
  results: any[];
  info: any[];
}
