import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  widgetId: String;
  pageId: String;
  widget: Widget;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params['pid']);
      console.log(params['wgid']);
      this.widgetId = params['wgid'];
      this.pageId = params['pid'];
    });
    if (this.widgetId === undefined) {
      this.widget = WidgetService.getNewWidget();
      this.widget.widgetType = 'YOUTUBE';
      this.widget.pageId = this.pageId;
      this.widget = this.widgetService.createWidget(this.pageId, this.widget);
    } else {
      this.widget = this.widgetService.findWidgetById(this.widgetId);
    }
  }

  deleteYoutube() {
    this.widgetService.deleteWidget(this.widget._id);
  }
  updateYoutube() {
    this.widgetService.updateWidget(this.widget._id, this.widget);
  }
}
