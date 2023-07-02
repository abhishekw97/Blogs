import { Component,OnInit } from '@angular/core';
import { BlogsService, blogType } from '../service/blogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
title = 'Blogs';
  blogs:blogType[]=[];
  constructor(private blogsService: BlogsService,private router:Router){}
  ngOnInit(){
    this.blogsService.getPosts().subscribe((value:blogType[])=>{
     this.blogs=value;
    });
  }
  onView(blog:blogType){
    console.log(blog);
    
     this.router.navigate(['/post', blog.id]);

  }
}
