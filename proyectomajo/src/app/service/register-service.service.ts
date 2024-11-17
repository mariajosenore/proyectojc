import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(
    private http: HttpClient
  ) { }

  private serverUrl_credit = 'https://bkd-general.getmab.com/';
  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  register(email: string, firstName: string, lastName: string): Observable<string> {
    const usuario = {

      email: email,
      first_name: firstName,
      last_name: lastName,
      password: "password",
    };

    const body = JSON.stringify(usuario);

    return this.http.post<string>(`${this.serverUrl_credit}register_Womenfit/`, body, this.options);

 }

}
