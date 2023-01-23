import { Component } from '@angular/core';
import {DogService} from "../dog.service";
import {RefreshEvent} from "../types";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-mark-board',
  templateUrl: './mark-board.component.html',
  styleUrls: ['./mark-board.component.css']
})
export class MarkBoardComponent {
  mark = 5;

  constructor(
    private snackBar: MatSnackBar,
    public dogService: DogService
  ) {
    window.addEventListener(RefreshEvent, () => {
      this.resetMark();
    })
  }

  resetMark() {
    this.mark = 5;
  }

  handleSubmit() {
    this.dogService.markDog(this.mark);
    this.snackBar.open("Mark successfully!", "", {
      duration: 3000,
      verticalPosition: "top"
    });
    this.resetMark();
    this.dogService.refreshDogImage();
  }
}
