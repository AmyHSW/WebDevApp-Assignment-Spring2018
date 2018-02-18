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
  pageId: String;
  widgetId: String;
  widget: Widget;
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params['pid']);
      this.pageId = params['pid'];
    });
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params['wgid']);
      this.widgetId = params['wgid'];
    });
  }

  deleteImage() {
    this.widgetService.deleteWidget(this.widgetId);
  }

  uploadImage() {
    this.widget.text = this.imageForm.value.text;
    this.widget.url = this.imageForm.value.url;
    this.widget.width = this.imageForm.value.width;
    this.widget.widgetType = 'IMAGE';
    this.widgetService.createWidget(this.pageId, this.widget);
  }
}
