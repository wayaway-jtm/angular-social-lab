import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPost } from '../IPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, IPost {
  title: string = '';
  thought: string = '';
  @Input() post: IPost;
  @Output() deleted? = new EventEmitter<Number>();

  constructor() {
  }

  ngOnInit() {
    this.title = this.post.title;
    this.thought = this.post.thought;
  }

  deletePost() {
    // this.deleted.emit({title: this.title, thought: this.thought});
    this.deleted.emit();
  }

}
