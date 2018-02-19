import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})

export class WidgetImageComponent implements OnInit {

  pageId: String;
  widgetId: String;
  widget: Widget;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params['pid']);
      console.log(params['wgid']);
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
    });
    if (this.widgetId === undefined) {
      this.widget = this.widgetService.getNewWidget();
      this.widgetId = this.widget._id;
      this.widget.widgetType = 'IMAGE';
      this.widget.pageId = this.pageId;
      this.widgetService.createWidget(this.pageId, this.widget);
    } else {
      this.widget = this.widgetService.findWidgetById(this.widgetId);
    }
  }

  deleteImage() {
    this.widgetService.deleteWidget(this.widgetId);
  }

  updateImage() {
    this.widgetService.updateWidget(this.widgetId, this.widget);
  }

}
