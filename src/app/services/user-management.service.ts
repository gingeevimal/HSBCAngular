import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  environment:any="";
  environment1:any="";

  constructor(private http: HttpClient) {

    this.environment= environment.userManagementServiceUrl;
    this.environment1= environment.CADServiceUrl;

   }

   getRequest(route) {
    return this.http.get<any>(this.environment + route).pipe(map(res => res));
  }
  getRequest1(route) {
    return this.http.get<any>(this.environment1 + route).pipe(map(res => res));
  }
  postRequest1(route, data) {
    return this.http.post<any>(this.environment1 + route, data).pipe(map(res => res));
  }
  postRequest(route, data) {
    return this.http.post<any>(this.environment + route, data).pipe(map(res => res));
  }

  putRequest(route, data) {    
    return this.http.put<any>(this.environment + route, data).pipe(map(res => res));
  }
  putRequest1(route, data) {    
    return this.http.put<any>(this.environment1 + route, data).pipe(map(res => res));
  }
  deleteRequest(route,data) {
    return this.http.post<any>(this.environment + route,data).pipe(map(res => res))
  }
  deleteRequest1(route) {
    return this.http.delete<any>(this.environment1 + route).pipe(map(res => res))
  }

}
