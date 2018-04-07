import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

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
    });
    if (this.widgetId === undefined) {
      this.widget = WidgetService.getNewWidget();
    } else {
      this.widgetService.findWidgetById(this.widgetId).subscribe(
        (widget: any) => {
          this.widget = widget;
        }
      );
    }
  }
  delete() {
    if (this.widgetId !== undefined) {
      this.widgetService.deleteWidget(this.widget._id).subscribe(
        (response: any) => {
          console.log('deleted widget HTML');
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
  update() {
    if (this.widget.name === undefined || this.widget.name === '') {
      this.errorFlag = true;
      this.errorMsg = 'Please enter name for this HTML!';
      return;
    }
    if (this.widgetId === undefined) {
      this.widget.type = 'HTML';
      this.widget.pageId = this.pageId;
      this.widgetService.createWidget(this.pageId, this.widget).subscribe(
        (response: any) => {
          console.log('create new widget HTML');
          this.route();
        },
        (error: any) => {
          console.log(error);
          this.errorFlag = true;
          this.errorMsg = error._body;
        }
      );
    } else {
      this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
        (response: any) => {
          console.log('updated widget HTML');
          this.route();
        },
        (error: any) => {
          console.log(error);
          this.errorFlag = true;
          this.errorMsg = error._body;
        }
      );
    }
  }

  route() {
    this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }
}
