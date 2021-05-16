import { Component, OnInit, Input } from '@angular/core';
import { BookdetailsService } from '../bookdetails.service'
import { Router } from "@angular/router";


@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent implements OnInit {
  
  

  constructor(private bookdetailservice: BookdetailsService,
    private router: Router) { }
    details: boolean;

  ngOnInit(): void {
    
  }
  bookDet = this.bookdetailservice.getItems();

  
}
