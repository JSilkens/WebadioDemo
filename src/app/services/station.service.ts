import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as data from '../../assets/config.json';
import {StreamService} from './stream.service';
import {Observable} from 'rxjs/Observable';
import {Channel} from '../models/Channel';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {ChannelList} from '../models/ChannelList';
const httpOptions = {headers: new HttpHeaders({'Accept':  'application/vnd.channel.vrt.be.channels_1.0+json'})
};

@Injectable()
export class StationService {
  private apiUrl = 'https://services.vrt.be/channel' + '/s?type=radio&state=active';
  constructor(
    private streamService: StreamService,
    private http: HttpClient
  ) { }

  // todo change type 'any'
  getChannels(): Observable<any> {
    return this.http.get<Channel[]>(this.apiUrl, httpOptions)
      .pipe(
        catchError(this.handleError('getChannels', []))
      );
  }

  private log(message: string) {
    console.log('StationService:', message);
  }

  private handleError<T>(operation = 'operation' , result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.meessage}`);
      return of(result as T);
    };
  }
}
