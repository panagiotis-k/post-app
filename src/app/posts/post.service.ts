import { Post } from "./post.model";
import {Subject} from 'rxjs';

export class PostService{
  private posts: Array<Post> = [];
  private postUpdated = new Subject<Post[]>();

  getPosts(){
    //!return a copy from the posts array
    return [...this.posts];
    // return this.posts;
  }

  getPostUpdateListener(){
    return this.postUpdated.asObservable();
  }

  addPost(post: Post){
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }

}
