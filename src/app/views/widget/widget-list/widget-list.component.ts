import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})

export class WidgetListComponent implements OnInit {

  widgets: Widget[] = [];
  pageId: String;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params['pid']);
      this.pageId = params['pid'];
    });
    this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
  }

  getUrl(url: String) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url.toString());
  }
}
