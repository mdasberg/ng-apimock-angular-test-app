import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ExampleService {

  /**
   * Constructor.
   * @param {HttpClient} http The http client.
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Gets the data using a http get request.
   * @return {Observable<HttpResponse<any>>} observable The observable.
   */
  get(): Observable<HttpResponse<any>> {
    return this.http.get('/items', {observe: 'response'});
  }

  /**
   * Gets the data using a http jsonp request.
   * @return {Observable<HttpResponse<any>>} observable The observable.
   */
  getAsJsonp(): Observable<any> {
    return this.http.jsonp('/items', 'callback');
  }

  /**
   * Posts the data using a http post request.
   * @return {Observable<HttpResponse<any>>} observable The observable.
   */
  post(body: any): Observable<HttpResponse<any>> {
    return this.http.post('/items', body, {observe: 'response'});
  }

  /**
   * Gets the binary data using a http get request.
   * @return {Observable<HttpResponse<any>>} observable The observable.
   */
  binary(): Observable<any> {
    return this.http.get('/items', {
      responseType: 'blob',
      observe: 'response',
    });
  }
}
