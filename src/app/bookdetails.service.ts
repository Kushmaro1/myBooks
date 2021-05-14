import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookdetailsService {
  bookDet=[];
  addBook(book) {
    this.bookDet.push(book);
  }

  getItems() {
    console.log(this.bookDet)
    return this.bookDet;
    
  }

  constructor() { }
}
