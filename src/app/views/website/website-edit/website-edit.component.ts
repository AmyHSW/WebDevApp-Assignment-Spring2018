import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  website: Website;
  userId: String;
  websites: Website[] = [];
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  updateWebsite() {
    console.log(this.website);
    this.website = this.websiteService.updateWebsite(this.website._id, this.website);
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.website._id);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.website = this.websiteService.findWebsitesById(params['wid']);
    });
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }

}
