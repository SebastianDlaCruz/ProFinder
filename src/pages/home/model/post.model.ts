export interface ModelPost {
  imgUser: string;
  nameUser: string;
  descriptionUser: string;
  post: string;
  typeOfService: string;
  services: string;
  provisionOfService: string;
  publicationType: string;
}


export interface ModelPublic extends ModelPost {
  id: string;
}