import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { BookdetailsService } from '../bookdetails.service';
import { FormControl, FormBuilder } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  items: any;
  loading; favourites; details = false;
  favcollection: any = [];

  // pagination
  page = 1;
  pageSize = 8;

  //initiation of the input control field queryField
  queryField: FormControl = new FormControl();

  constructor(private formBuilder: FormBuilder,//builds a form
    private router: Router,//usage of .router.navigateByUrl
    private searchService: SearchService,//google book api service
    private bookdetailsservice: BookdetailsService//book detail service
    ) { }

  ngOnInit() {
    if (localStorage.getItem("3") == "Valid") {//checks authentication
      // Get google book api observable queryField input
      this.favourites = false;
      this.loading = false;
      this.queryField.valueChanges //observable allows to check for value changes - inouting a char
        .pipe(debounceTime(1000), distinctUntilChanged())//2 directories used to delay the time between values are emitted 
        .subscribe((queryField: any) => {//subscribes to the data in the search input (queryField)
          let te = queryField.replace(/\s/g, "");//scripts i found to replace bad symbols with ""
          if (te.length > 2) {//if the search input is bigger then 2 chars
            this.searchService.get(queryField).subscribe((result: any) => {//subscribes to the service and gets the api search resualts
              this.loading = true;
              setTimeout(() => {//time out between searches
                this.items = result.items;
                console.log(this.items);
              }, 1500);
            });
          }
        });
      localStorage.clear()
    } else {
      this.router.navigateByUrl('login')
    }
  }

  //Previw
  goToLink(url: string) {
    window.open(url, "_blank");
  }
  //Add to favorites
  add(prod) {
    console.log(prod)
    if (this.favcollection.indexOf(prod) === -1) {//checks if its a duplicated object
      this.favcollection.push(prod);//adds the book to the favourits array
      console.log(this.favcollection)
      return this.favcollection;
    }
  }
  //Open and close favourites
  favlist() {
    this.favourites = true;
  }
  backtolist() {
    this.favourites = false;
  }
  //Remove from favorites array
  del(book) {
    return this.favcollection = this.favcollection.filter(item => item !== book);
  }
  //Adds selected book object to service
  addBook(book) {
    this.bookdetailsservice.addBook(book);//passing a book object to details component via service
    this.details = true;
    console.log(book)
  }
  //Closes detail view
  detail() {
    this.details = false;
  }


}
