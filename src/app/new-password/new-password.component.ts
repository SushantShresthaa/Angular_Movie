import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from '../model/auth.model';
import { NewPasswordService } from '../service/new-password.service';
import { ResetpasswordService } from '../service/resetpassword.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
  alert:boolean=false;
  auth:Auth= new Auth();
  data:Auth[]=[];
  constructor(private newPasswordService: NewPasswordService, private route: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>{
      this.auth.name= data['pname'];

    })
    this.getUser();

  }
  getUser(){
   
    this.newPasswordService.findAllData().subscribe(datas=>{

     // this.data=datas;
    });


 }

 resetPassword(){

  this.newPasswordService.updatePassword(this.auth.name, this.auth.password).subscribe((response)=>{
   this.alert=true;
   setTimeout(() => {
    this.route.navigate(['customer-data']);
}, 2000);  //2 seconds
   
  });

 }
 closeAlert(){
  this.alert=false;
 }
}
