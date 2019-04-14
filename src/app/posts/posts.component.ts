import { Component, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';
import { IPosts } from './services/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

}
