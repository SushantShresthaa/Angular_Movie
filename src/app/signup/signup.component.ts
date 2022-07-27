import { Component, OnInit } from '@angular/core';
import { CustomerData } from '../model/customer.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  alert:boolean=false;
  customer:CustomerData= new CustomerData();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  signupUser(): void{
    
    this.authService.signup(this.customer).subscribe((data)=> {
    });
    this.alert=true;
  };
 closeAlert(){
  this.alert=false;
 }
}
