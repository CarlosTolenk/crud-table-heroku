import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../interfaces/comment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  comments: Comment[] = [];

  constructor(
    private commentService: CommentService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.commentService.getAllComments().subscribe((comments: Comment[]) => {
      this.comments = comments;
    })
  }

  editComment(comment: Comment) {
    this.router.navigate(['edit', comment.id])
  }

}
