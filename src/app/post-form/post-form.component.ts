import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Post } from '../interfaces/post'


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() callParent = new EventEmitter<Post>();

  isVisible = true;
  title = "";
  thought = "";

  constructor() { }

  ngOnInit(): void {
  }

  hideForm(){
    this.isVisible = false;
    console.log(`form is visibile ${this.isVisible}`)
  }

  newPost(){
    console.log(`Title: ${this.title}, and Thoughts: ${this.thought}`);
   
    // Check the form to make sure it is filled out
    if(this.title.length > 1 && this.thought.length > 1){
      let post: Post = { title: this.title, thought: this.thought };
      this.callParent.emit(post);
    }

    //Close the form
    this.title ="";
    this.thought ="";
    this.isVisible = true;
  }

}
