import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myBooks';
  ngOnInit(): void {
    localStorage.setItem("1", "Admin");
    localStorage.getItem("1");
    localStorage.setItem("2", "****");
    localStorage.getItem("2");
  }
}
