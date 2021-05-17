import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookdetailsService {
  bookDet = [];
  details = false;
  addBook(book) {
    this.bookDet.push(book);
  }

  getItems() {
    return this.bookDet;
  }
  constructor() { }
}
