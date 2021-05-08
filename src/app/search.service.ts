import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  key="abc";
  get(queryField: string){
   
    return this.httpClient.get(`https://www.googleapis.com/books/v1/volumes?q=${queryField}&maxResults=40&this.key`
      );
  }
  
}

