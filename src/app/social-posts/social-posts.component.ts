import { Component, OnInit } from '@angular/core';
import { IPost } from '../ipost'
import { Post } from '../post/post.class';
import { PostCounterService } from '../post-counter-service.service'

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
  providers: [ PostCounterService ]
})
export class SocialPostsComponent implements OnInit {

  showForm: boolean = false;
  postList: IPost[] = [
    new Post(this.counter.getAndIncrement(), 'Grand Circus', 'Grand Circus is cool'),
    new Post(this.counter.getAndIncrement(), 'Bunnies', 'Bunnies are cute'),
    new Post(this.counter.getAndIncrement(), 'Pizza', 'Pizza is good'),
    new Post(this.counter.getAndIncrement(), 'Laundry', 'Laundry takes time away from programming')];

  constructor(private counter: PostCounterService) { }

  onSubmit(eventVar: IPost) {
    this.postList = [...this.postList, new Post(this.counter.getAndIncrement(), eventVar.title, eventVar.thought)];
    this.showForm = false;
  }

  onDelete(deletedPostId) {
    this.postList = this.postList.filter(p => p.id !== deletedPostId);
  }

  showNewThoughtForm() {
    this.showForm = true;
  }

  ngOnInit() {
  }

}
