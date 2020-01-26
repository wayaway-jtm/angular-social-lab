import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IPost } from '../IPost';
import { TestComponentRenderer } from '@angular/core/testing';
import { FormGroup, FormControl } from '@angular/forms';

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
  submitTest: boolean = false;
  
  form = new FormGroup({
    thoughtTitle: new FormControl("Thought title"),
    thoughtTxt: new FormControl("Enter your thought")
  })

  @Output() submitted = new EventEmitter<IPost>();

  constructor() { }

  ngOnInit() {
  }

  submitPost() {
    this.submitTest = true;
    this.submitted.emit({ title: this.titleInput, thought: this.txtThought });
  }

}