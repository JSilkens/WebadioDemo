import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StationListComponent } from './station-list/station-list.component';
import { StationItemComponent } from './station-item/station-item.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StationService} from './services/station.service';
import {StreamService} from './services/stream.service';
import { PlayerComponent } from './player/player.component';


@NgModule({
  declarations: [
    AppComponent,
    StationListComponent,
    StationItemComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StationService, StreamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
