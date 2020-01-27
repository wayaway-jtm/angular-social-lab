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
  postList: IPost[] = [
    new Post('Grand Circus', 'Grand Circus is cool'),
    new Post('Bunnies', 'Bunnies are cute'),
    new Post('Pizza', 'Pizza is good'),
    new Post('Laundry', 'Laundry takes time away from programming')];

  constructor() { }

  onSubmit(eventVar: IPost) {
    this.postList = [...this.postList, new Post(eventVar.title, eventVar.thought)];
    this.showForm = false;
  }

  onDelete(postIndex) {
    this.postList.splice(postIndex, 1);
  }

  showNewThoughtForm() {
    this.showForm = true;
  }

  ngOnInit() {
  }

}
