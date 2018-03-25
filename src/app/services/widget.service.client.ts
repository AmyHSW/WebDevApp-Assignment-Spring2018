import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable()
export class WidgetService {

  constructor(private _http: Http) {}
  baseUrl = environment.baseUrl;

  static getNewWidget() {
    return {_id: undefined, type: undefined, _pageId: undefined, size: undefined, text: undefined, width: undefined,
    url: undefined, name: undefined};
  }

  createWidget(pageId: String, widget: any) {
    return this._http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findWidgetsByPageId(pageId: String) {
    return this._http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findWidgetById(widgetId: String) {
    return this._http.get(this.baseUrl + '/api/widget/' + widgetId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateWidget(widgetId: String, widget: any) {
    return this._http.put(this.baseUrl + '/api/widget/' + widgetId, widget)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteWidget(widgetId: String) {
    return this._http.delete(this.baseUrl + '/api/widget/' + widgetId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  reorderWidgets(pageId: String, startIndex: String, endIndex: String) {
    return this._http.put(this.baseUrl + '/api/page/' + pageId
      + '/widget?initial=' + startIndex + '&final=' + endIndex, {})
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
}
