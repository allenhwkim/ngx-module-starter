import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * The service DataService provides a method returning a number
 */
@Injectable()
export class DataService {
  /**
   * The method getData returns a generic observable
   */
  public getData(): Observable<number> {
      return Observable.of(15);
  }
}
