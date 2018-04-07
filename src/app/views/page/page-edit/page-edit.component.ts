import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})

export class PageEditComponent implements OnInit {

  page: any;
  errorFlag: boolean;
  errorMsg: String;
  alert: String;

  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  updatePage() {
    if (this.page.name === '') {
      this.errorFlag = true;
      this.errorMsg = 'Please enter name for this Page';
      return;
    }
    this.pageService.updatePage(this.page._id, this.page).subscribe(
      (response: any) => {
        console.log('updated page');
        this.router.navigate(['..'], {relativeTo: this.activatedRoute});
      },
      (error: any) => {
        this.errorFlag = true;
        this.errorMsg = error._body;
        console.log(error);
      }
    );
  }
  deletePage() {
    this.pageService.deletePage(this.page._id).subscribe(
      (response: any) => {
        console.log('deleted page: pageId = ' + this.page._id);
        this.router.navigate(['..'], {relativeTo: this.activatedRoute});
      },
      (error: any) => console.log(error)
    );
  }
  ngOnInit() {
    this.errorFlag = false;
    this.alert = '* Please enter page name';
    this.activatedRoute.params.subscribe((params: any) => {
      this.pageService.findPageById(params['pid']).subscribe(
        (page: any) => {
          this.page = page;
        }
      );
    });
  }

}
