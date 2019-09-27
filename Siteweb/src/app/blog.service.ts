import { Injectable } from '@angular/core';
import { Blog } from './blog.model';
import { HttpClient } from '@angular/common/http';
import { BlockingProxy } from 'blocking-proxy';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url:string="https://localhost:44343/api/blogs"
  blogs:Blog[];
  constructor(private http:HttpClient) {  }
    getAllBlogs(){
      this.http.get(this.url).toPromise().then(
        res=>{
          this.blogs = res as Blog[];
        }
      )
    }
 
}
