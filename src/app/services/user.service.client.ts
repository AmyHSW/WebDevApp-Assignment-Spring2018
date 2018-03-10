import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private _http: Http) {}
  baseUrl = environment.baseUrl;

  static getNewUser() {
    return new User(undefined, undefined, undefined, undefined, undefined, undefined);
  }

  createUser(user: User) {
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


  updateUser(userId: String, user: User) {
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
