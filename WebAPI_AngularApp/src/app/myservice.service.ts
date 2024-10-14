import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';

export interface WebApiTab {
  Id: number;
  Name: string;
  Age: number;
  mark: number;
}

const endpoint = "http://localhost:52068/api/API/";

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  addWebApiTab(product: any):Observable<any> {
    return this.http.post(endpoint + 'postwebapitab' ,product);
  }

  //to get all data
  getAllWebApiTabs(): Observable<any> {
    return this.http.get<WebApiTab>(endpoint + 'getwebapitabs');
  }

  deleteWebApiTab(id: number): Observable<any> {
    return this.http.delete<WebApiTab>(endpoint + 'deletewebapitab/' + id);
  }

  getWebApiTab(id:number): Observable<any> {
    return this.http.get<WebApiTab>(endpoint + 'getwebapitab/' + id);
  }

  updateWebApiTab(id:number, product:WebApiTab): Observable<any> {
    return this.http.put<WebApiTab>(endpoint + 'putwebapitab/' + id,product);
  }
}
