import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { IPost } from '../ipost'
import { Post } from '../post/post.class';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  showForm: boolean = false;
  postList: IPost[] = [];

  constructor() { }

  onSubmit(eventVar: IPost) {
    console.log('Received thought: ', new Post(eventVar.title, eventVar.thought));
    this.postList = [...this.postList, new Post(eventVar.title, eventVar.thought)];
    console.log('Array: ', this.postList);
    this.showForm = false;
  }

  onDelete(eventVar) {

  }

  showNewThoughtForm() {
    this.showForm = true;
  }

  ngOnInit() {
  }

}
