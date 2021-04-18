import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import {RouterModule} from "@angular/router";
import { HomepageComponent } from './homepage/homepage.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) }],
      { relativeLinkResolution: 'legacy' }
      ),
    ScullyLibModule,
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
