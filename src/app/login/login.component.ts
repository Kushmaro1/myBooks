import { Component, OnInit, Output } from '@angular/core';

import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  valid=false
  constructor(private router: Router) { }

  ngOnInit(): void {
   
  }
  
  secured=true;
  submited(data){
    
    if (data.pass==localStorage.getItem("2")
    &&data.user==localStorage.getItem("1")) {
      console.log("works")
      this.router.navigateByUrl('search')
      
      }
      else {
        this.valid=true
      }
  

  }
  closeAlert(){
    this.valid=false
  }

}
