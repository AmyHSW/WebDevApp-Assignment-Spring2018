import {Injectable} from '@angular/core';
import { Widget } from '../models/widget.model.client';

@Injectable()
export class WidgetService {

  // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', url = 'url', width = '100%')
  widgets: Widget[] = [
    new Widget('1', 'HEADER', '321', '2', 'GIZMODO'),
    new Widget('2', 'HEADER', '321', '4', 'Lorem ipsum'),
    new Widget('3', 'IMAGE', '321', '2', 'text', '100%', 'http://lorempixel.com/400/200/'),
    new Widget('4', 'IMAGE', '321', '2', 'my image', '100%',
      'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/11/4/2/FNM_120109-Sugar-Fix-006_s4x3.jpg'
        + '.rend.hgtvcom.616.462.suffix/1382539033745.jpeg'),
    new Widget('5', 'YOUTUBE', '321', '2', 'text', '100%', 'https://www.youtube.com/embed/d5nCbSNS9mA')
  ];

  static getNewWidget() {
    return new Widget(undefined, undefined, undefined);
  }

  createWidget(pageId: String, widget: Widget) {
    widget._id = String(this.widgets.length + 1);
    this.widgets.push(widget);
    return widget;
  }

  findWidgetsByPageId(pageId: String) {
    const resultSet = [];
    for ( const i in this.widgets) {
      if (this.widgets[i].pageId === pageId) {
        resultSet.push(this.widgets[i]);
      }
    }
    return resultSet;
  }

  findWidgetById(widgetId: String) {
    return this.widgets.find(function (widget) {
      return widget._id === widgetId;
    });
  }

  updateWidget(widgetId: String, widget: Widget) {
    for ( const i in this.widgets ) {
      if ( this.widgets[i]._id === widgetId ) {
        switch (widget.widgetType) {
          case 'HEADER':
            this.widgets[i].name = widget.name;
            this.widgets[i].text = widget.text;
            this.widgets[i].size = widget.size;
            return true;

          case 'IMAGE':
            this.widgets[i].name = widget.name;
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;

          case 'YOUTUBE':
            this.widgets[i].name = widget.name;
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;
        }

      }
    }
    return false;
  }

  deleteWidget(widgetId: String) {
    for (const i in this.widgets) {
      if (this.widgets[i]._id === widgetId) {
        const j = +i;
        this.widgets.splice(j, 1);
      }
    }
  }
}
