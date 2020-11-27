import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetitionService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get("https://reqres.in/api/users?page=1").pipe(map(resp =>{
      return resp['data'];
    }));
  }

  getSingleUser(id){
    return this.http.get(`https://reqres.in/api/users/${id}`).pipe(map((resp: any) =>{
      return resp["data"];
    }))
  }

  postUser(nombre: string, empleo: string){
    const body = {
      name: nombre,
      job: empleo
    }
    return this.http.post("https://reqres.in/api/users",body).pipe(map((resp: any) => {
      return resp;
    }));
  }

  deleteUser(id){
    return this.http.delete(`https://reqres.in/api/users/${id}`).pipe(map(data => {
      return data;
    }))
  }
}