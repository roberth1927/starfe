export interface ReqResUserCreate {
  msg:  string;
  data: Data;
}

export interface Data {
  name:         string;
  email:        string;
  phone_number: string;
  birthdate:    Date;
  signature:    string;
  _id:          string;
  createdAt:    Date;
  updatedAt:    Date;
}
