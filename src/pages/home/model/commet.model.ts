export interface ModelComment {
  idPost: string;
  comment: string;
  nameUser: string;
  imgUser: string;
  emailUser?: string;
  idUser: string;
  description: string;
}


export interface ModelCommentInfo extends ModelComment {
  id: string;
}
