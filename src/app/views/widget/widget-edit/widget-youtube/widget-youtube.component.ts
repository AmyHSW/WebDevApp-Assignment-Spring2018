import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
@ViewChild('f') youtubeForm: NgForm;

  widgetId: String;
  pageId: String;
  webId: String;
  userId: String;
  widget: Widget;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

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

  deleteYoutube() {
    if (this.widgetId !== undefined) {
      this.widgetService.deleteWidget(this.widget._id);
    }
  }
  updateYoutube() {
    this.widget.url = this.youtubeForm.value.url;
    if (this.widgetId === undefined) {
      this.widget.widgetType = 'YOUTUBE';
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
}
