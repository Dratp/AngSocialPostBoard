import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  constructor() { }
  posts : Post[] = [
    {title: 'First', thought: 'Just wanted to be first so I made this silly post'},
    {title: 'Second', thought: 'Two are better than 1'}
  ];

  addPost(post: Post){
    console.log(`social post received ${post.title}, ${post.thought}`)
    this.posts.reverse();
    this.posts.push({title: post.title, thought: post.thought});
    this.posts.reverse();
  }

  deletePost(post:Post){
    this.posts = this.posts.filter(p => p.thought !== post.thought);
  }

  ngOnInit(): void {
  }

}
