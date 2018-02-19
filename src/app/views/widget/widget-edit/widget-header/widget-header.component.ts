import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-heading',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeadingComponent implements OnInit {

  widgetId: String;
  widget: Widget;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params['wgid']);
      this.widgetId = params['wgid'];
    });
    this.widget = this.widgetService.findWidgetById(this.widgetId);
  }

  updateWidget() {
    this.widgetService.updateWidget(this.widget._id, this.widget);
  }
  deleteWidget() {
    this.widgetService.deleteWidget(this.widget._id);
  }
}
