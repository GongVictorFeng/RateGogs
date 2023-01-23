import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DogApiDto, MarkRecord} from "./types";


@Injectable({
  providedIn: 'root'
})
export class DogService {
  private markHistory: Map<string, number> = new Map();
  private randomDogImageApi = `https://dog.ceo/api/breeds/image/random`;
  dogImage: string = '';
  loading = false;
  constructor(private httpClient: HttpClient) { }


  updateRandomDogImageApi(api: string) {
    this.randomDogImageApi = api;
  }

  refreshDogImage() {
    this.loading = true;
    this.dogImage = '';
    this.httpClient
      .get<DogApiDto>(this.randomDogImageApi)
      .subscribe(({message}) => {
        this.dogImage = message;
        this.loading = false;
      }, err => {
        console.log(err);
        alert("Something wrong! Please try again!");
      })
  }

  markDog(score: number) {
    this.markHistory.set(this.dogImage, score);
  }

  getMarkRecords(): MarkRecord[] {
    return [...this.markHistory.keys()].map((image) => {
      return {
        image,
        mark: this.markHistory.get(image) as number
      }
    })
  }
}
