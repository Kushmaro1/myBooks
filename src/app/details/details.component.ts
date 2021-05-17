import { Component, OnInit } from '@angular/core';
import { BookdetailsService } from '../bookdetails.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {



  constructor(private bookdetailservice: BookdetailsService) { }

  ngOnInit(): void {

  }
  //bookDet gets the book object from a service
  bookDet = this.bookdetailservice.getItems();

}
