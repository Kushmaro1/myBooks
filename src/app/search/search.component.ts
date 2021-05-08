import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import {FormControl,FormGroup,Validators,FormBuilder} from "@angular/forms";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter,
  switchMap
} from "rxjs/operators";
import { fromEvent } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  items: any;
  loading;
  favourites;
  favcollection: any=[];

  // pagination
  page = 1;
  pageSize = 8;
  
  queryField: FormControl = new FormControl();

  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private searchService: SearchService) {}
    
  ngOnInit() {
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
            }, 2000);
          });
        }
      });
  }
  combineSlug(id) {
    return `${id}`;
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }
  add(prod){
    console.log(prod)
    if(this.favcollection.indexOf(prod)===-1){
      this.favcollection.push(prod);
   console.log(this.favcollection)
   return this.favcollection;
    }
   
    }
    favlist(){
      this.favourites=true;
    }
    backtolist(){
      this.favourites=false;
    }
    del(book){
    return this.favcollection = this.favcollection.filter(item => item !== book);
    }
    
    
}
