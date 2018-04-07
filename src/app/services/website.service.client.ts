import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class WebsiteService {

  constructor(private _http: Http) {}
  baseUrl = environment.baseUrl;

  static getNewWebsite() {
    return {name: undefined, _userId: undefined, description: undefined};
  }

  createWebsite(userId: String, website: any) {
    return this._http.post(this.baseUrl + '/api/user/' + userId + '/website', website)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findWebsitesByUser(userId: String) {
    return this._http.get(this.baseUrl + '/api/user/' + userId + '/website')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findWebsitesById(websiteId: String) {
    return this._http.get(this.baseUrl + '/api/website/' + websiteId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateWebsite(websiteId: String, website: any) {
    return this._http.put(this.baseUrl + '/api/website/' + websiteId, website)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteWebsite(websiteId: String) {
    return this._http.delete(this.baseUrl + '/api/website/' + websiteId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
}
