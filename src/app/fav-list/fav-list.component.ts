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

  ngOnInit(): void {
    localStorage.setItem("3","Valid")

  }
  bookDet = this.bookdetailservice.getItems();

  back(book){
    localStorage.setItem("3","Valid");
    this.router.navigateByUrl('search');
    return this.bookDet = this.bookDet.filter(item => item !== book);
    
   
    
  }
}
