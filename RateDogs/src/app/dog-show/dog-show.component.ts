import {Component, OnInit} from '@angular/core';
import {DogService} from "../dog.service";

@Component({
  selector: 'app-dog-show',
  templateUrl: './dog-show.component.html',
  styleUrls: ['./dog-show.component.css']
})
export class DogShowComponent implements OnInit {
  constructor(public dogService: DogService) {

  }

  ngOnInit() {
    this.dogService.refreshDogImage();
  }
}
