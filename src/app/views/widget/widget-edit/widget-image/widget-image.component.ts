import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})

export class WidgetImageComponent implements OnInit {
@ViewChild('f') imageForm: NgForm;

  widgetId: String;
  pageId: String;
  websiteId: String;
  userId: String;
  widget: Widget;
  baseUrl = environment.baseUrl;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute) { }

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

  deleteImage() {
    if (this.widgetId !== undefined) {
      this.widgetService.deleteWidget(this.widget._id).subscribe(
        (data: any) => {
          console.log('delete widget image');
        },
        (error: any) => console.log(error)
      );    }
  }

  updateImage() {
    this.widget.url = this.imageForm.value.url;
    if (this.widgetId === undefined) {
      this.widget.type = 'IMAGE';
      this.widget.pageId = this.pageId;
      this.widgetService.createWidget(this.pageId, this.widget).subscribe(
        (widget: Widget) => {
          console.log('create widget image: ' + widget._id + ' ' + widget.url);
        },
        (error: any) => console.log(error)
      );
    } else {
      this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
        (widget: Widget) => {
          console.log('update widget image: ' + widget._id + ' ' + widget.url);
        },
        (error: any) => console.log(error)
      );
    }
  }

}
