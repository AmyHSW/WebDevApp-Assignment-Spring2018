import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') pageForm: NgForm;

  page: Page;
  webId: String;
  createFlag = false;
  createMsg = 'New Page Created!';

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.webId = params['wid'];
    });
    this.page = PageService.getNewPage();
  }

  createPage() {
    this.page.name = this.pageForm.value.name;
    this.page.title = this.pageForm.value.title;
    this.pageService.createWebsite(this.webId, this.page);
    this.createFlag = true;
  }
}
