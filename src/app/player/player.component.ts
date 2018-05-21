import { Component, OnInit } from '@angular/core';
import {Stream} from '../models/Stream';
import {Channel} from '../models/Channel';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
 streams: Stream[];
 selectedChannel: Channel;

  constructor() {

  }

  ngOnInit() {

  }

}
