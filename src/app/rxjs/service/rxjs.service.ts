import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor( private http: HttpClient ) { }
  
  getData(): Observable<any> {
    return this.http.get('https://gorest.co.in/public/v2/users');
    }
  
  }
