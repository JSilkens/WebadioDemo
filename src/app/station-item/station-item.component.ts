import {Component, Input, OnInit} from '@angular/core';
import {Channel} from '../models/Channel';

@Component({
  selector: 'app-station-item',
  templateUrl: './station-item.component.html',
  styleUrls: ['./station-item.component.scss']
})
export class StationItemComponent {
  @Input('channel') channel: Channel;
  constructor() {
  }

  // ngOnInit() {
  // }

}
