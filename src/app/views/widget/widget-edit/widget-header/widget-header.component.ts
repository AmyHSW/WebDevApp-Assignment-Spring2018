import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-heading',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})

export class WidgetHeadingComponent implements OnInit {

  widgetId: String;
  pageId: String;
  websiteId: String;
  widget: any;
  errorFlag: Boolean;
  errorMsg: String;
  alert: String;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.errorFlag = false;
    this.alert = '* Please enter widget name';
    this.activatedRoute.params.subscribe((params: any) => {

      console.log('widget._id: ' + params['wgid']);
      this.widgetId = params['wgid'];
      this.pageId = params['pid'];
      this.websiteId = params['wid'];

      if (this.widgetId === undefined) {
        this.widget = WidgetService.getNewWidget();
      } else {
        this.widgetService.findWidgetById(this.widgetId).subscribe(
          (widget: any) => {
            this.widget = widget;
          },
          (error: any) => console.log(error)
        );
      }
    });
  }

  updateWidget() {
    if (this.widget.name === undefined || this.widget.name === '') {
      this.errorMsg = 'Please enter name for this Header!';
      this.errorFlag = true;
      return;
    }
    if (this.widgetId === undefined) {
      this.create(this.widget);
    } else {
      this.update(this.widget);
    }
  }

  create(widget: any) {
    widget.type = 'Header';
    widget.pageId = this.pageId;
    this.widgetService.createWidget(this.pageId, this.widget).subscribe(
      (widgets: any) => {
        console.log('created new widget Header');
        this.route();
        },
      (error: any) => {
        console.log(error);
        this.errorFlag = true;
        this.errorMsg = error._body;
      }
    );
  }

  update(widget: any) {
    this.widgetService.updateWidget(this.widget._id, widget).subscribe(
      (response: any) => {
        console.log('updated widget header');
        this.route();
        },
      (error: any) => {
        console.log(error);
        this.errorFlag = true;
        this.errorMsg = error._body;
      }
    );
  }

  route() {
    this.router.navigate(['/user/website', this.websiteId, 'page', this.pageId, 'widget']);
  }

  deleteWidget() {
    if (this.widgetId !== undefined) {
      this.widgetService.deleteWidget(this.widget._id).subscribe(
        (response: any) => {
          console.log('delete widget header');
          this.route();
        },
        (error: any) => {
          console.log(error);
          this.errorFlag = true;
          this.errorMsg = error._body;
        }
      );
    } else {
      this.route();
    }
  }
}
