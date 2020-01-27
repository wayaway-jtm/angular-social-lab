import { Component, OnInit } from '@angular/core';
import { IPost } from '../ipost'
import { Post } from '../post/post.class';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  showForm: boolean = false;
  postList: IPost[] = [new Post()];

  constructor() { }

  onSubmit(eventVar: IPost) {
    this.postList = [...this.postList, new Post(eventVar.title, eventVar.thought)];
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
