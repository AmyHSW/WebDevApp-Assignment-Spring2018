import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-heading',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})

export class WidgetHeadingComponent implements OnInit {

  widgetId: String;
  pageId: String;
  websiteId: String;
  userId: String;
  widget: Widget;
  errorFlag: Boolean;
  errorMsg: String;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMsg = 'Please enter text!';

    this.activatedRoute.params.subscribe((params: any) => {

      console.log('widget._id: ' + params['wgid']);
      this.widgetId = params['wgid'];
      this.pageId = params['pid'];
      this.websiteId = params['wid'];
      this.userId = params['uid'];

      if (this.widgetId === undefined) {
        this.widget = WidgetService.getNewWidget();
      } else {
        this.widgetService.findWidgetById(this.widgetId).subscribe(
          (widget: Widget) => {
            this.widget = widget;
          },
          (error: any) => console.log(error)
        );
      }
    });
  }

  updateWidget() {
    if (this.widget.text === undefined) {
      this.errorFlag = true;
      return;
    }
    if (this.widgetId === undefined) {
      this.create(this.widget);
    } else {
      this.update(this.widget);
    }
  }

  create(widget: Widget) {
    widget.type = 'HEADER';
    widget.pageId = this.pageId;
    this.widgetService.createWidget(this.pageId, this.widget).subscribe(
      (newWidget: Widget) => {
        console.log('create widget header: ' + newWidget._id + ', name: ' + newWidget.name
          + ', text: ' + newWidget.text + ', size: ' + newWidget.size);
        this.route();
        },
      (error: any) => console.log(error)
    );
  }

  update(widget: Widget) {
    this.widgetService.updateWidget(this.widget._id, widget).subscribe(
      (updatedWidget: Widget) => {
        console.log('update widget header: ' + updatedWidget._id + ', name: ' + updatedWidget.name
          + ', text: ' + updatedWidget.text + ', size: ' + updatedWidget.size);
        this.route();
        },
      (error: any) => console.log(error)
    );
  }

  route() {
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }

  deleteWidget() {
    if (this.widgetId !== undefined) {
      this.widgetService.deleteWidget(this.widget._id).subscribe(
        (data: Widget) => {
          console.log('delete widget header');
        },
        (error: any) => console.log(error)
      );
    }
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }
}
