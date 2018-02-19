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
@ViewChild('f') imageForm: NgForm;

  widgetId: String;
  pageId: String;
  webId: String;
  userId: String;
  widget: Widget;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params['wgid']);
      this.widgetId = params['wgid'];
      this.pageId = params['pid'];
      this.webId = params['wid'];
      this.userId = params['uid'];
    });
    if (this.widgetId === undefined) {
      this.widget = WidgetService.getNewWidget();
    } else {
      this.widget = this.widgetService.findWidgetById(this.widgetId);
    }
  }

  deleteImage() {
    if (this.widgetId !== undefined) {
      this.widgetService.deleteWidget(this.widget._id);
    }
  }

  updateImage() {
    this.widget.url = this.imageForm.value.url;
    if (this.widgetId === undefined) {
      this.widget.widgetType = 'IMAGE';
      this.widget.pageId = this.pageId;
      this.widget = this.widgetService.createWidget(this.pageId, this.widget);
    } else {
      this.widgetService.updateWidget(this.widget._id, this.widget);
    }
  }

}
