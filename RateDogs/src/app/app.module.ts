import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HistoryComponent } from './history/history.component';
import { DogShowComponent } from './dog-show/dog-show.component';
import { MarkBoardComponent } from './mark-board/mark-board.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule} from "@angular/forms";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HistoryComponent,
    DogShowComponent,
    MarkBoardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
