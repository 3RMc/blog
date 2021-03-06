import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';
import {ScullyLibModule} from "@scullyio/ng-lib";
import {BlogPostComponent} from './blog-post/blog-post.component';
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [BlogComponent, BlogPostComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ScullyLibModule,
    MatListModule,

  ]
})
export class BlogModule { }
