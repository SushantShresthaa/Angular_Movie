import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../model/auth.model';
import { CustomerData } from '../model/customer.model';
import { AuthService } from '../service/auth.service';
import { ResetpasswordService } from '../service/resetpassword.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
 
  public message:string="";
  auth:Auth= new Auth();
  data:Auth[]=[];

  constructor(private resetpasswordService: ResetpasswordService, private route: Router) { }

  ngOnInit(): void {
    this.message="Please Enter username!";


 }
 
 passwordReset(): void{
  
  this.resetpasswordService.findByName(this.auth.name).subscribe((data)=>{
  
    if(data!=null){
      console.log(data);
      this.route.navigate(['/new-password', this.auth.name]);
      
     
    }else{
      this.message="Sorry incorrect username!! Please try again!!";

    }

  });


 }

}
