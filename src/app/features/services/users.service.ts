import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ReqResUserCreate } from 'src/core/interfaces/reqResUserCreate.interface';
import { ReqResUser } from 'src/core/interfaces/reqResUser.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers({limit,from}: {limit: number, from: number}) {
    return this.http.get<ReqResUser>(`${this.apiUrl}/users`, {params: {limit, from}});
  }

  postUser(body: any){
    return this.http.post<ReqResUserCreate>(`${this.apiUrl}/users/register`, body);
  }

  uploadSignature(userId: string, signatureFile: File) {
    const formData = new FormData();
    formData.append('file', signatureFile);

    return this.http.post(`${this.apiUrl}/upload/users/${userId}`, formData);
  }

  searchUsersByName(name:string) {

    return this.http.get<ReqResUser>(`${this.apiUrl}/users`, {params: {name}});
  }
}
