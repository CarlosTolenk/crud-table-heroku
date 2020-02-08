import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Comment, CommentDTO} from "../interfaces/comment";
import {environment} from "../../environments/environment"
import {catchError, tap} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.url}/comments`)
      .pipe(
        catchError(this.handleError('getAllComments', []))
      );
  }

  getCommentById(id: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.url}/comments/${id}`)
  }

  createComment(commentDTO: CommentDTO): Observable<CommentDTO>{
    return this.http.post(`${this.url}/comments/`, commentDTO, httpOptions).pipe(
      catchError(this.handleError<any>('createComment' + commentDTO.id))
    );
  }


  updateComment(commentDTO: CommentDTO): Observable<Comment> {
    return this.http.post(`${this.url}/comments/${commentDTO.id}/update`, commentDTO, httpOptions).pipe(
      catchError(this.handleError<any>('updateComment' + commentDTO.id))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


}
