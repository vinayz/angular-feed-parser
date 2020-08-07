import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';

import { PaginationService } from './services/pagination.service';
import { FeedService } from './services/feed.service';


@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule],
  declarations: [AppComponent, PaginationComponent],
  providers: [PaginationService, FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
