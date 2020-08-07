import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as xml2js from "xml2js";
import { PaginationService } from './pagination.service'
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class FeedService {
    constructor(private http: HttpClient, private paginationService: PaginationService) { }

    //all records
    allItems: any = [];

    GetRssFeedData(feedUrl): Observable<any> {
        if (!feedUrl) {
            alert("Please Enter feed URL.");
            return throwError("Error, Blank input.");
        }
        const requestOptions: Object = {
            observe: "body",
            responseType: "text"
        };

        return this.http.get(feedUrl, requestOptions).pipe(map(data => {
            let parseString = xml2js.parseString;
            parseString(data, (err, result) => {
                this.allItems = result.rss.channel[0].item;
            });
            return this.paginationService.changePage(1, this.allItems)
        }))

    }

}