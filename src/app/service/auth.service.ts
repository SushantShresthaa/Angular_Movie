import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../model/auth.model';
import { CustomerData } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private HttpClient: HttpClient) { }

  public login(auth:Auth) : Observable<any> {

    //localhost:8080/v2/auth
    //METHOD =POST
    //{
   // "username" : "Amisha",
   // "password" : "test"
   //}
   //CORS
    return this.HttpClient.post("http://localhost:8080/org/auth",auth);
  }

public findAllData(): Observable<CustomerData[]>{

  return this.HttpClient.get<CustomerData[]>("http://localhost:8080/org/customers");
}

public signup(customerData: CustomerData):Observable<CustomerData>{

  return this.HttpClient.post<CustomerData>("http://localhost:8080/org/customers", customerData);

}

public delete(id:number): Observable<Object>{

  return this.HttpClient.delete(`http://localhost:8080/org/customers/${id}`);
}
public isLoggedIn(){
  return localStorage.getItem("Authorization")!=null;
}

public haveAccess(){
  let jwtToken=localStorage.getItem("Authorization") || '';
  let payload=jwtToken.split('.')[1];
  let claims=atob(payload);
  let data =JSON.parse(claims);
  if(data.auth=='ADMIN'){
    return true;
  }else{
   return false;
  }
}

public CleanAuthToken() : void {
  localStorage.removeItem("Authorization")
}



}




/*
public alogin(auth: Auth):string{
let message:string="";

if("jack"== auth.username && "jill" == auth.password){
  console.log("welcome "+ auth.username);
  message="Welcome "+ auth.username;
}else{

  message= "Your username and password is incorrect!!!";
}

return message;
}
public alogin(auth: Auth):Observable<string>{
  let message:string="";
  
  if("jack"== auth.username && "jill" == auth.password){
    console.log("welcome "+ auth.username);
    message="Welcome "+ auth.username;
  }else{
  
    message= "Your username and password is incorrect!!!";
  }
  
  return new Observable( observer => {
    observer.next(message);
    observer.complete();
 });
  }
*/


