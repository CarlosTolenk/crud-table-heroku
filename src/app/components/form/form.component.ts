import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


import {ParamComment} from "../../interfaces/param.comment";
import {Comment, CommentDTO} from "../../interfaces/comment";
import {CommentService} from "../../services/comment.service";

enum MODE_FORM {
  CREATE,
  EDIT
}

const urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  registerForm: FormGroup;
  commentId: number = 0;
  modeForm: number = MODE_FORM.CREATE;
  submitted = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commentService: CommentService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: ParamComment) => {
      if (params.commentId) {
        this.modeForm = MODE_FORM.EDIT;
        this.commentId = Number(params.commentId);
        this.getComment(this.commentId);
      } else {
        this.createForm({name: '', website: '', email: '', content: ''});
      }

    })
  }

  getComment(id: number) {
    this.commentService.getCommentById(id).subscribe((comment: Comment) => {
      this.createForm(comment);
    });
  }

  createForm(commentDTO: CommentDTO) {
    this.registerForm = this.formBuilder.group({
      name: [commentDTO.name, Validators.required],
      website: [commentDTO.website, Validators.pattern(urlRegex)],
      email: [commentDTO.email, [Validators.required, Validators.email]],
      content: [commentDTO.content, [Validators.required, Validators.pattern('a-zA-Z'), Validators.maxLength(100)]],
    })
  }

  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    if (this.modeForm === MODE_FORM.EDIT) {
      this.editComment();
    } else {
      this.createComment();
    }
  }

  editComment() {
    const commentDTO = Object.assign({id: this.commentId}, this.registerForm.value);
    this.commentService.updateComment(commentDTO).subscribe((data) => {
      this.onBack();
    });
  }

  createComment() {
    const commentDTO = Object.assign({}, this.registerForm.value);
    this.commentService.createComment(commentDTO).subscribe((data) => {
      this.onBack();
    });
  }

  onBack() {
    this.router.navigate(['dashboard'])
  }

}
