import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() callParent = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  del(){
    this.callParent.emit(this.post);
  }

}
