import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  environment:any="";
  constructor(private http: HttpClient) {
    this.environment= environment.loginServiceUrl;
   }

  postRequest(route, data) {
    return this.http.post<any>(this.environment + route, data).pipe(map(res => res));
  }
}
