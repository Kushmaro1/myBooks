import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import {BookdetailsService} from '../bookdetails.service'
import {FormControl,FormBuilder} from "@angular/forms";
import {debounceTime,distinctUntilChanged} from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  items: any;
  loading; favourites; details=false;extra;
  favcollection: any=[];
  
  // pagination
  page = 1;
  pageSize = 8;
  
  queryField: FormControl = new FormControl();

  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private searchService: SearchService,
    private bookdetailsservice: BookdetailsService) {}
    
  ngOnInit() {
    if (localStorage.getItem("3")=="Valid") {
    // Get google book api search resualts
    this.favourites = false;
    this.loading = false;
    this.queryField.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((queryField: any) => {
        let te = queryField.replace(/\s/g, "");
        if (te.length > 2) {
          this.searchService.get(queryField).subscribe((result: any) => {
            this.loading = true;
            setTimeout(() => {
              this.items = result.items;
              console.log(this.items);
            }, 1500);
          });
        }
      });
      localStorage.clear()
    }else {
      this.router.navigateByUrl('login')
    }
    this.details = this.bookdetailsservice.details;
    console.log(this.details)
  }
  
  
  
  //Previw
  goToLink(url: string) {
    window.open(url, "_blank");
  }
  //Add to favorites
  add(prod){
    console.log(prod)
    if(this.favcollection.indexOf(prod)===-1){
      this.favcollection.push(prod);
   console.log(this.favcollection)
   return this.favcollection;}
    }
    favlist(){
      this.favourites=true;
    }
    backtolist(){
      this.favourites=false;
    }
    //Remove from favorites
    del(book){
    return this.favcollection = this.favcollection.filter(item => item !== book);
    }
    addBook(book) {
      this.bookdetailsservice.addBook(book);
      this.details=true;
      console.log(book) 
    }
    detail(){
      this.details=false;
    }

    
   
    
}
