import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Auth } from '../model/auth.model';
import { CustomerData } from '../model/customer.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  


  auth:Auth= new Auth();
  
  customer:CustomerData= new CustomerData();

  public message:string="";

  data:CustomerData[]=[];

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.message="";
    this.getUser();
  }

  validateUser(): void{
    /*
    this.message= this.authService.login(this.auth);
*/
    let result= this.authService.login(this.auth);

    result.subscribe(data=>{
      console.log(data);
        if(data != undefined) {
          //route to home component
          localStorage.setItem('Authorization','Bearer '+data.accessToken);
          this.route.navigate(['/customer-data']); // navigate to other page
      
      }else{
        this.message="Sorry, incorrect name and password!!" ;

      }
    });


  }

  

   getUser(){
   
      this.authService.findAllData().subscribe(datas=>{

        this.data=datas;
      });


   }
  }