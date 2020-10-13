import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Post } from '../interfaces/post'


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  isVisible = false;
  constructor() { }

  ngOnInit(): void {
  }

  hideForm(){
    this.isVisible = !!!this.isVisible;
    console.log(`form is visibile ${this.isVisible}`)
  }

}
