import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CodebreakerService {

  constructor(
    private http: HttpClient
  ) { }

  getCodebreaker(code) {
    const url = 'http://localhost:3000/guess';
    return this.http.get(`${url}?newCode=${code}`);
  }

  getGenerar() {
    const url = 'http://localhost:3000/generate';
    return this.http.get(`${url}`);
  }

  setSecret(secret) {
    const url = 'http://localhost:3000/guess';
    return this.http.post(`${url}`, {"secret": secret});
  }


}
