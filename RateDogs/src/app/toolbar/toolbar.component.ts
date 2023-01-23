import { Component } from '@angular/core';
import {DogService} from "../dog.service";
import {RefreshEvent} from "../types";
import {Router} from "@angular/router";
import {DogBreeds} from "../dogBreeds";
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  dogBreeds = DogBreeds;
  constructor(
    private dogService: DogService,
    private router: Router
  ) {
  }

  handleClickRefresh() {
    this.dogService.refreshDogImage();
    const event = new Event(RefreshEvent);
    window.dispatchEvent(event);
  }

  handleClickHistory() {
    this.router.navigate(['history']);
  }

  handleSelectFeed(feed: string) {
    this.dogService.updateRandomDogImageApi(`https://dog.ceo/api/breed/${feed}/images/random`);
    this.dogService.refreshDogImage();
  }
}
