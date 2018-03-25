import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../services/page.service.client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})

export class PageEditComponent implements OnInit {

  page: any;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  updatePage() {
    this.pageService.updatePage(this.page._id, this.page).subscribe(
      (response: any) => {
        console.log('updated page');
      }
    );
  }
  deletePage() {
    this.pageService.deletePage(this.page._id).subscribe(
      (response: any) => {
        console.log('deleted page: pageId = ' + this.page._id);
      },
      (error: any) => console.log(error)
    );
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.pageService.findPageById(params['pid']).subscribe(
        (page: any) => {
          this.page = page;
        }
      );
    });
  }

}
