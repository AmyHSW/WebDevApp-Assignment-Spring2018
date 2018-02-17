import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  public safeUrl;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/d5nCbSNS9mA');
  }

}
