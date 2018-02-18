import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})

export class PageEditComponent implements OnInit {

  page: Page;
  userId: String;
  webId: String;
  pages: Page[] = [];

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  updatePage() {
    console.log(this.page);
    this.page = this.pageService.updatePage(this.page._id, this.page);
  }
  deletePage() {
    this.pageService.deletePage(this.page._id);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.webId = params['wid'];
      this.page = this.pageService.findPageById(params['pid']);
    });
    this.pages = this.pageService.findPageByWebsiteId(this.webId);
  }

}
