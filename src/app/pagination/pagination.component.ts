import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../services/pagination.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  // pagination object
  pagination: any = {};

  constructor(private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.pagination = this.paginationService.pagination;
  }

  changePage(page: number) {
    this.pagination = this.paginationService.changePage(page, null).page;
  }

}
