import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-heading',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})

export class WidgetHeadingComponent implements OnInit {
@ViewChild('f') headerForm: NgForm;

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
      this.widgetService.findWidgetById(this.widgetId).subscribe(
        (widget: Widget) => {
          this.widget = widget;
        }
      );
    }
  }

  updateWidget() {
    this.widget.text = this.headerForm.value.text;
    if (this.widgetId === undefined) {
      this.widget.widgetType = 'HEADER';
      this.widget.pageId = this.pageId;
      this.widgetService.createWidget(this.pageId, this.widget).subscribe(
        (widget: Widget) => {
          this.widget = widget;
        }
      );
    } else {
      this.widgetService.updateWidget(this.widget._id, this.widget);
    }
  }
  deleteWidget() {
    if (this.widgetId !== undefined) {
      this.widgetService.deleteWidget(this.widget._id);
    }
  }
}
