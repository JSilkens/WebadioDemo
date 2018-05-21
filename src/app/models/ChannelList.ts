import {Channel} from './Channel';

export class ChannelList {
  private _channels: Channel[];


  constructor() {
    this._channels = [];
  }


  get channels(): Channel[] {
    return this._channels;
  }

  set channels(value: Channel[]) {
    this._channels = value;
  }
}
