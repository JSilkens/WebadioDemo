import {Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import {Channel} from '../models/Channel';
import {StreamService} from '../services/stream.service';
import {PlayerService} from '../services/player.service';

@Component({
  selector: 'app-station-item',
  templateUrl: './station-item.component.html',
  styleUrls: ['./station-item.component.scss']
})
export class StationItemComponent  implements OnInit {
  @Input('channel') channel: Channel;
  @Output() channelPlayClicked: EventEmitter<Channel> = new EventEmitter<Channel>();

  constructor(private streamService: StreamService , private playerService: PlayerService) {
  }

   ngOnInit() {
   }

   selectChannel(): void {
        console.log(this.channel.name + ' selected');
        this.channelPlayClicked.emit(this.channel);
        // change card backgrond color (selected)
      // (document.getElementById('card' + this.channel.code) as HTMLDivElement).class += ' selected';
   }

}
