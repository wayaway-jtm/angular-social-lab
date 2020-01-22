import { Component, OnInit } from '@angular/core';
import { IPost } from '../IPost';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  postList: IPost[];

  constructor() { }

  onSubmit() { }

  onDelete() { }

  ngOnInit() {
  }

}
