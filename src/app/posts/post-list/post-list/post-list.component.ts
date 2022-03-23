import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../../post.model';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent  implements OnInit, OnDestroy{


  posts : Array<Post> = [];
  private postSub : Subscription;

  constructor(public postService: PostService){}

  ngOnInit(){
    // this.posts = this.postService.getPosts();

    this.postSub = this.postService.getPostUpdateListener()
    .subscribe((posts:Post[])=>{
      console.log(posts);
      this.posts = posts;
    });
  }

  ngOnDestroy(){
    this.postSub.unsubscribe();
  }

}
