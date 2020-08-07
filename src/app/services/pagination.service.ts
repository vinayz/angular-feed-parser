
import { Injectable } from '@angular/core';

@Injectable()

export class PaginationService {

    // pagination object
    pagination: any = {};

    //Data to display
    pagedItem: any = [];

    //All records
    allItems: any = [];

    getPagination(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage: number, endPage: number;

        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }

        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages
        let pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);

        }
        // return object with all Pagination properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    changePage(page: number, allItem) {
        if (page < 1 || page > this.pagination.totalPages) {
            return;
        }
        if (allItem) {
            this.allItems = allItem;
        }
        // get pagination object
        this.pagination = this.getPagination(this.allItems.length, page);

        // get items of current page
        this.pagedItem = this.allItems.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
        return { data: this.pagedItem, page: this.pagination };
    }
}