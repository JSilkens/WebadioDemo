import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Stream} from '../models/Stream';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
const httpOptions = {headers: new HttpHeaders({'Accept':  'application/vnd.channel.vrt.be.streams_1.0+json'})
};
@Injectable()
export class StreamService {
  private apiUrl = 'https://services.vrt.be' + '/channel/s/11/streams';
  constructor(private http: HttpClient) { }

  // getStreams(): Observable<any> {
  //   return this.http.get<Stream[]>(this.apiUrl, httpOptions).pipe(
  //     catchError(this.handleError('getStreams' , []))
  //   );
  // }

  private log(message: string) {
    console.log('StationService:', message);
  }
  // private handleError(operation: 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     this.log(`${operation} failed: ${error.meessage}`);
  //     return of(result as T);
  //   };
  // }
}
