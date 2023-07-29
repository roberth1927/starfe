export interface ReqResUser {
  msg:  string;
  data: Data;
}

export interface Data {
  total: number;
  data:  User[];
}

export interface User {
  _id:          string;
  name:         string;
  email:        string;
  phone_number: string;
  birthdate:    string;
  signature:    string;
  createdAt:    Date;
  updatedAt:    Date;
}
