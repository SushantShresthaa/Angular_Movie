import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerData } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {

  constructor(private HttpClient: HttpClient) { }
  public findByName(name: string): Observable<any>{

    return this.HttpClient.get<any>(`http://localhost:8080/org/customer/${name}`)
  }
  public findAllData(): Observable<CustomerData[]>{

    return this.HttpClient.get<CustomerData[]>("http://localhost:8080/org/customers");
  }
  
}
