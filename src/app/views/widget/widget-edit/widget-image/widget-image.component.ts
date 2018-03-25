import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})

export class WidgetImageComponent implements OnInit {

  widgetId: String;
  pageId: String;
  websiteId: String;
  userId: String;
  widget: any;
  errorFlag: Boolean;
  errorMsg: String;
  baseUrl = environment.baseUrl;

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
      this.userId = params['uid'];

      if (this.widgetId === undefined) {
        this.widget = WidgetService.getNewWidget();
        this.widgetId = '';
      } else {
        this.widgetService.findWidgetById(this.widgetId).subscribe(
          (widget: any) => {
            this.widget = widget;
          }
        );
      }
    });
  }

  deleteImage() {
    if (this.widgetId !== '') {
      this.widgetService.deleteWidget(this.widget._id).subscribe(
        (response: any) => {
          console.log('deleted widget Image');
        },
        (error: any) => console.log(error)
      );
    }
    this.route();
  }

  updateImage() {
    if (this.widget.url === '') {
      this.errorFlag = true;
      return;
    }
    if (this.widgetId === undefined) {
      this.create();
    } else {
      this.update();
    }
  }

  route() {
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }

  create() {
    this.widget.type = 'Image';
    this.widget.pageId = this.pageId;
    this.widgetService.createWidget(this.pageId, this.widget).subscribe(
      (widgets: any) => {
        console.log('created new widget Image');
        this.route();
        },
      (error: any) => console.log(error)
    );
  }

  update() {
    this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
      (response: any) => {
        console.log('updated widget Image');
        this.route();
        },
      (error: any) => console.log(error)
    );
  }

  chooseFromFlickr() {
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widgetId, 'flickr']);

  }
}
