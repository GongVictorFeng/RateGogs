import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DogService} from "../dog.service";
import {Location} from "@angular/common";
import {MarkRecord} from "../types";
type SortIcon = 'swap_vert' | 'arrow_upward' | 'arrow_downward';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  markRecords: MarkRecord[] = [];

  sort: SortIcon = 'swap_vert';
  sortStatus: Map<SortIcon, SortIcon> = new Map<SortIcon, SortIcon>();

  constructor(
    private router: Router,
    private location: Location,
    private dogService: DogService
  ) {

    this.sortStatus.set('swap_vert', 'arrow_downward');
    this.sortStatus.set('arrow_downward', 'arrow_upward');
    this.sortStatus.set('arrow_upward', 'swap_vert');
  }

  handleClickBack() {
    this.location.back();
  }

  ngOnInit() {
    this.markRecords = this.dogService.getMarkRecords();
  }

  sortRecords() {
    switch (this.sort) {
      case 'arrow_upward':
        this.markRecords = this.markRecords.sort((prev, next) => {
          return prev.mark - next.mark;
        })
        break;
      case 'arrow_downward':
        this.markRecords = this.markRecords.sort((prev, next) => {
          return next.mark - prev.mark;
        })
        break;
      case 'swap_vert':
        this.markRecords = this.dogService.getMarkRecords();
    }
  }

  handleClickSort() {
    this.sort = this.sortStatus.get(this.sort) as SortIcon;
    this.sortRecords();
  }
}
