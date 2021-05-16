import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookdetailsService {
  bookDet=[];
  details = false;
  addBook(book) {
    this.bookDet.push(book);
  }

  getItems() {
    console.log(this.bookDet)
    return this.bookDet;
  }
  detail(){
    console.log(this.details)
   return this.details=false;
  }


  constructor() { }
}
