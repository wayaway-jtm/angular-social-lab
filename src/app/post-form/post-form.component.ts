import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IPost } from '../IPost';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit, IPost {
  title: string;
  thought: string;
  titleInput: string = '';
  txtThought: string = '';

  @Output() submitted = new EventEmitter<IPost>();

  constructor() { }

  ngOnInit() {
  }

  submitPost() {
    this.submitted.emit({ title: this.titleInput, thought: this.txtThought });
  }

}