import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { User } from '../model/user';

@Component({
  selector: 'app-parcial2',
  imports: [FormsModule, CommonModule],
  templateUrl: './parcial2.component.html',
  styleUrl: './parcial2.component.scss'
})

export class Parcial2Component implements OnInit {
  posts: any[] = [];
  users: any[] = [];
  selectedUser: User | null = null;
  selectedUserName: string | null = null;
  selectedUserOk: boolean = false;
  comments: any[] = [];
  showCommentsForPostId: number | null = null;
  selectedPost: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe(data => this.posts = data);
    this.apiService.getUsers().subscribe(data => this.users = data);
  }

  filterPosts(): void {
    if (this.selectedUser != null) {
      this.apiService.getPostsByUser(this.selectedUser.id).subscribe(data => this.posts = data);
      const currentName = this.selectedUser.name;
      this.selectedUserName = currentName;
      this.selectedUserOk = true;
    }
  }

  showComments(postId: number): void {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      this.selectedPost = post;
      this.apiService.getCommentsByPost(postId).subscribe(data => {
        this.comments = data;
        this.showCommentsForPostId = postId;
      });
    }
  }

  backToPosts(): void {
    this.showCommentsForPostId = null;
    this.selectedPost = null;
  }
}
