import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  widgetId: String;
  pageId: String;
  websiteId: String;
  widget: any;
  errorFlag: Boolean;
  errorMsg: String;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMsg = 'Please enter URL!';

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
          }
        );
      }
    });
  }

  deleteYoutube() {
    if (this.widgetId !== undefined) {
      this.widgetService.deleteWidget(this.widget._id).subscribe(
        (response: any) => {
          console.log('deleted widget YouTube');
          this.route();
        },
        (error: any) => console.log(error)
      );
    } else {
      this.route();
    }
  }
  updateYoutube() {
    if (this.widget.url === undefined) {
      this.errorFlag = true;
      return;
    }
    if (this.widgetId === undefined) {
      this.widget.type = 'YouTube';
      this.widget.pageId = this.pageId;
      this.widgetService.createWidget(this.pageId, this.widget).subscribe(
        (widgets: any) => {
          console.log('created new widget YouTube');
          this.route();
          },
        (error: any) => console.log(error)
      );
    } else {
      this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
        (response: any) => {
          console.log('updated widget YouTube');
          this.route();
          },
        (error: any) => console.log(error)
      );
    }
  }

  route() {
    this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }
}
