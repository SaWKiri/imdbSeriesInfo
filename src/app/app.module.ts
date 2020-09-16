import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesInfoComponent } from './components/series-info/series-info.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { EpisodeDialogComponent } from './components/episode-dialog/episode-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    SeriesInfoComponent,
    EpisodeDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DropDownsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    GridModule,
    DialogsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
