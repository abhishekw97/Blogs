import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogsService, blogType } from '../service/blogs.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
id:number=0;
post:blogType | undefined;
constructor(private router : Router, private route :
ActivatedRoute,private blogsService: BlogsService){}
ngOnInit(){
      this.route.paramMap.subscribe((params:any) => {
        this.id = params.get('id');
     });
     this.blogsService.getPost(this.id).subscribe((val:blogType)=>{
       this.post=val;
     })
  }
}
