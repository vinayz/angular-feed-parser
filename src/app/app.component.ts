import { Component } from "@angular/core";
import { PaginationService } from './services/pagination.service';
import { FeedService } from './services/feed.service';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  //Data to display
  RssData: any = [];

  //input feed URL
  feedUrl: string = "";

  constructor(private feedService: FeedService, private paginationService: PaginationService) { }

  fetchFeedData() {
    this.feedService.GetRssFeedData(this.feedUrl).subscribe(rssData => {
      this.RssData = rssData.data;
    });
  }

  //Get data page wise
  getPagedData() {
    this.RssData = this.paginationService.pagedItem;
  }

}