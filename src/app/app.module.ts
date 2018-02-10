import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';

import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';

import { PageListComponent } from './components/page/page-list/page-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';

import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetHeadingComponent } from './components/widget/widget-edit/widget-header/widget-heading.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';

import {UserService} from './services/user.service.client';
import {WebsiteService} from './services/website.service.client';
import {PageService} from './services/page.service.client';
import {WidgetService} from './services/widget.service.client';

import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteListComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    PageListComponent,
    PageNewComponent,
    PageEditComponent,
    WidgetChooserComponent,
    WidgetHeadingComponent,
    WidgetImageComponent,
    WidgetListComponent,
    WidgetYoutubeComponent,
    WidgetEditComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
  ],
  providers: [UserService, WebsiteService, PageService, WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
