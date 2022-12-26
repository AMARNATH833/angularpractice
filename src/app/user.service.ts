import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl='http://localhost:3000';

  httpOptions={
    'Content-Type':'application/json'
  }
constructor(private httpClient:HttpClient) { }

  // getUsers():Observable<User[]>{
  //   return this.httpClient.get<User[]>(this.apiUrl+'amar/')
  // }
}
