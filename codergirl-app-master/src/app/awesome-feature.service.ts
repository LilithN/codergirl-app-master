
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AwesomeFeatureService {

  constructor() { }

  loadMethod() {
   console.log('Method works!');
  }
}
