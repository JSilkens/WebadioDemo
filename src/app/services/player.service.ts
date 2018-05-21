import { Injectable } from '@angular/core';
/*
A player service that stops and starts streams
 */
@Injectable()
export class PlayerService {
  private _isPlaying: boolean;

  constructor() { }


  get isPlaying(): boolean {
    return this._isPlaying;
  }

  set isPlaying(value: boolean) {
    this._isPlaying = value;
    console.log(value);
  }
}
