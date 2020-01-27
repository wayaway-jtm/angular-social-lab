import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPost } from '../IPost';
import { PostCounterService } from '../post-counter-service.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ PostCounterService ]
})
export class PostComponent implements OnInit, IPost {
  id: Number;
  title: string = '';
  thought: string = '';
  @Input() post: IPost;
  @Output() deleted? = new EventEmitter<Number>();

  constructor(private counter: PostCounterService) {
  }

  ngOnInit() {
    this.title = this.post.title;
    this.thought = this.post.thought;
    this.id = this.post.id;
  }

  deletePost() {
    // this.deleted.emit({title: this.title, thought: this.thought});
    this.deleted.emit(this.id);
  }

}
