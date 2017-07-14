import { Injectable } from '@angular/core';
import { Comedian } from './comedian.model';
import { COMEDIANS } from './sample-data';

@Injectable()
export class ComedianService {

  constructor() { }

  getComedians() {
    return COMEDIANS;
  }

  getComedianById(comedianId: number) {
    for (var i = 0; i <= COMEDIANS.length - 1; i++) {
      if (COMEDIANS[i].id === comedianId) {
        return COMEDIANS[i];
      }
    }
  }

}
