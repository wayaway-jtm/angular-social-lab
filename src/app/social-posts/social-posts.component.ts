import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { IPost } from '../ipost'

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  showForm: boolean = false;
  postList: PostComponent[];

  constructor() { }

  onSubmit(eventVar: IPost) {
    this.postList = [...this.postList, new PostComponent(eventVar.title, eventVar.thought)]
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
