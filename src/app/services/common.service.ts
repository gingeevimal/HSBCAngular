import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
//{
//   providedIn: 'root'
// })
export class CommonService {
  environment:any="";
  constructor(private http: HttpClient) {
    this.environment= environment.menuserviceUrl;
   }

   getRequest(route) {
    return this.http.get<any>(this.environment + route).pipe(map(res => res));
  }


  postRequest(route, data) {
    return this.http.post<any>(this.environment + route, data).pipe(map(res => res));
  }

  putRequest(route, data) {    
    return this.http.put<any>(this.environment + route, data).pipe(map(res => res));
  }

  deleteRequest(route,data) {
    return this.http.post<any>(this.environment + route,data).pipe(map(res => res))
  } 
}
