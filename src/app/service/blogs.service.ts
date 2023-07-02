import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http : HttpClient) { }
  getPosts(){
    return this.http.get<blogType[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getPost(id:number){
    return this.http.get<blogType>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}

export interface blogType{
  body:string;
  id:number;
  title:string;
  userId:number;
  imgUrl?:string;
}