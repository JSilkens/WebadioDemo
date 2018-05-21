import { Component, OnInit } from '@angular/core';
import {Channel} from '../models/Channel';
import {StationService} from '../services/station.service';
import {ChannelList} from '../models/ChannelList';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent implements OnInit {
  channels: Channel[] = [];
  channel: Channel;
  channelList: ChannelList = new ChannelList();

  constructor(private stationService: StationService) {
  }

  ngOnInit() {
    this.getStations();
    console.log(this.stationService.getChannels());
  }

  private getStations(): void {
    this.stationService.getChannels()
      .subscribe(channels => this.channels = channels.channels);
  }

  onChannelPlayClicked(channel: Channel) {
    console.log(channel.name);
  }
}
