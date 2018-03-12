import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
  @ViewChild('f') htmlForm: NgForm;

  widgetId: String;
  pageId: String;
  websiteId: String;
  userId: String;
  widget: Widget;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log('widget._id: ' + params['wgid']);
      this.widgetId = params['wgid'];
      this.pageId = params['pid'];
      this.websiteId = params['wid'];
      this.userId = params['uid'];
    });
    if (this.widgetId === undefined) {
      this.widget = WidgetService.getNewWidget();
    } else {
      this.widgetService.findWidgetById(this.widgetId).subscribe(
        (widget: Widget) => {
          this.widget = widget;
        }
      );
    }
  }
  delete() {
    if (this.widgetId !== undefined) {
      this.widgetService.deleteWidget(this.widget._id).subscribe(
        (data: Widget) => {
          console.log('delete widget html');
        },
        (error: any) => console.log(error)
      );
    }
  }
  update() {
    this.widget.text = this.htmlForm.value.text;
    if (this.widgetId === undefined) {
      this.widget.type = 'HTML';
      this.widget.pageId = this.pageId;
      this.widgetService.createWidget(this.pageId, this.widget).subscribe(
        (widget: Widget) => {
          console.log('create widget html: ' + widget._id + ' ' + widget.url);
        },
        (error: any) => console.log(error)
      );
    } else {
      this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
        (widget: Widget) => {
          console.log('update widget html: ' + widget._id + ' ' + widget.url);
        },
        (error: any) => console.log(error)
      );
    }
  }

}
