export interface Comment {
  id: number;
  article_id: number;
  content: string;
  name: string;
  email: string
  website: string
  dates: { created: string, updated: string }
}

export interface CommentDTO {
  id?:number;
  content: string;
  name: string;
  email: string
  website: string
}

