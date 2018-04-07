import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Http, RequestOptions, Response } from '@angular/http';
import {SharedService} from './shared.service';
import {Router} from '@angular/router';

@Injectable()
export class UserService {

  constructor(private _http: Http,
              private sharedService: SharedService,
              private router: Router) {}
  baseUrl = environment.baseUrl;
  options = new RequestOptions();

  static getNewUser() {
    return {username: undefined, firstName: undefined, lastName: undefined, password: undefined, email: undefined};
  }

  login(username: String, password: String) {
    this.options.withCredentials = true; // jga

    const body = {
      username : username,
      password : password
    };

    return this._http.post(this.baseUrl + '/api/login', body, this.options)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  logout() {
    this.options.withCredentials = true;

    return this._http.post(this.baseUrl + '/api/logout', '', this.options)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  register(username: String, password: String) {
    this.options.withCredentials = true;
    const body = {
      username: username,
      password: password
    };
    return this._http.post(this.baseUrl + '/api/register', body, this.options)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            console.log('loggedIn: ' + user['username']);
            this.sharedService.user = user;
            return true;
          } else {
            console.log('loggedIn: fail');
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }

  createUser(user: any) {
    return this._http.post(this.baseUrl + '/api/user', user)
      .map(
        (res: Response) => {
          return res.json();
        });
  }

  findUserByUsername(username: String) {
    return this._http.get(this.baseUrl + '/api/user?username=' + username)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findUserByCredentials(username: String, password: String) {
    return this._http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findUserById(userId: String) {
    return this._http.get(this.baseUrl + '/api/user/' + userId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }


  updateUser(userId: String, user: any) {
    return this._http.put(this.baseUrl + '/api/user/' + userId, user)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteUser(userId: String) {
    return this._http.delete(this.baseUrl + '/api/user/' + userId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
}
