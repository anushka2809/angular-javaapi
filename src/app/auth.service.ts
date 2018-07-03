import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http : HttpClient ) { }

  getUserDetails(username){

    return this.http.post('api/auth.php', {
      username
    })
  }
}