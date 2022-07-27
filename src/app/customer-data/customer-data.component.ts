import { Component, OnInit } from '@angular/core';
import { CustomerData } from '../model/customer.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {
  customer:CustomerData= new CustomerData();


  data:CustomerData[]=[];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
   
    this.authService.findAllData().subscribe(datas=>{

      this.data=datas;
    });


 }

 deleteUser(id:number): void{
  this.authService.delete(id).subscribe((data)=>{
    this.getUser();
  });

 }
}
