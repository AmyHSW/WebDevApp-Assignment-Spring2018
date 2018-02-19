import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  pageId: String;
  widget: Widget;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params['pid']);
      this.pageId = params['pid'];
    });
    this.widget = WidgetService.getNewWidget();
  }

  create(type: String) {
    this.widget.widgetType = type;
    this.widget.pageId = this.pageId;
    this.widget = this.widgetService.createWidget(this.pageId, this.widget);
    this.router.navigate(['..', this.widget._id], {relativeTo: this.activatedRoute});
  }
}
