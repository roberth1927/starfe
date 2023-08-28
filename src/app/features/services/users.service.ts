import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ReqResUserCreate } from 'src/core/interfaces/reqResUserCreate.interface';
import { Data, ReqResUser } from 'src/core/interfaces/reqResUser.interface';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  initData: Data = {
    total: 0,
    data: []
  }

  private apiUrl = environment.apiUrl;
  private behaviorSubject = new BehaviorSubject<Data>(this.initData);

  constructor(private http: HttpClient) { }

  searchUsersByName(name: string) {

    this.http.get<ReqResUser>(`${this.apiUrl}/users`, { params: { name } }).subscribe((res) => {
      this.behaviorSubject.next(res.data);

    });
  }

  Users = this.behaviorSubject.asObservable();

  getUsers({ limit, from }: { limit: number, from: number }) {
    return this.http.get<ReqResUser>(`${this.apiUrl}/users`, { params: { limit, from } });
  }

  postUser(body: any) {
    return this.http.post<ReqResUserCreate>(`${this.apiUrl}/users/register`, body);
  }

  uploadSignature(userId: string, signatureFile: File) {
    const formData = new FormData();
    formData.append('file', signatureFile);

    return this.http.post(`${this.apiUrl}/upload/users/${userId}`, formData);
  }
}
