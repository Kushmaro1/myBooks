import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  valid = false
  constructor(private router: Router) { }

  ngOnInit(): void { }
  //Authorization with local storage hard coded user/pass
  submited(data) {
    if (data.pass == localStorage.getItem("2")
      && data.user == localStorage.getItem("1")) {
        //this is used for verification on mainComponent
      localStorage.setItem("3", "Valid")
      this.router.navigateByUrl('main')
    }
    else {
      this.valid = true
    }
  }
  //x button
  closeAlert() {
    this.valid = false
  }

}
