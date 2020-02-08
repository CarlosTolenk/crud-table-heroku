import {Component, OnInit} from '@angular/core';
import {CommentService} from "./services/comment.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'crud-table-heroku';

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.commentService.getAllComments();
  }
}
