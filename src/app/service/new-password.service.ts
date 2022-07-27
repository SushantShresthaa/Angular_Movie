import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerData } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class NewPasswordService {

  constructor(private HttpClient: HttpClient) { }

  public updatePassword(name: string, password: string): Observable<any>{

    return this.HttpClient.patch<any>(`http://localhost:8080/org/customers/${name}`,password);
  }
  public findAllData(): Observable<CustomerData[]>{

    return this.HttpClient.get<CustomerData[]>("http://localhost:8080/org/customers");
  }


}
