import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AngthemeService {
  private baseurl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  signup(cc) {
    return this.http.post(this.baseurl + "/adduser", cc);
  }
  signin(ld) {
    return this.http.post(this.baseurl + "/signin", ld);
  }
  message(msg) {
    return this.http.post(this.baseurl + "/sendMsg", msg);
  }

  getMail() {
    return this.http.get(this.baseurl + "/sentMail");
  }
  
  updateContact(ud) {
    return this.http.put(this.baseurl + "/updatecontact", ud);
  }

  totrash(id) {
    return this.http.put(this.baseurl + "/totrash/" + id, "");
  }
  fromtrash() {
    return this.http.get(this.baseurl + "/fromtrash");
  }
  finalDelete(id) {
    return this.http.delete(this.baseurl + "/delete/" + id);
  }

  addtask(tas) {
    return this.http.post(this.baseurl + "/addTask", tas);
  }

  gettask() {
    return this.http.get(this.baseurl + "/getTask");
  }

  deleteTask(id) {
    return this.http.delete(this.baseurl + "/deleteTask/" + id);
  }
  readMail(id) {
    return this.http.get(this.baseurl + "/readmail/" + id);
  }
  getinbox(mail) {
    return this.http.get(this.baseurl + "/inbox/" + mail);
  }
  getsent(mail) {
    return this.http.get(this.baseurl + "/sent/" + mail);
  }
}


