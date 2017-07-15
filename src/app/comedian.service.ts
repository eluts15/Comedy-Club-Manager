import { Injectable } from '@angular/core';
import { Comedian } from './comedian.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ComedianService {
  comedians: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.comedians = database.list('comedians');
  }

  getComedians() {
    return this.comedians;
  }

  addComedian(newComedian: Comedian) {
    this.comedians.push(newComedian);
  }

  getComedianById(comedianId: string) {
    return this.database.object('comedians/' + comedianId);
  }

  updateComedian(localUpdatedComedian) {
      var comedianEntryInFirebase = this.getComedianById(localUpdatedComedian.$key);
      comedianEntryInFirebase.update({title: localUpdatedComedian.title,
                                   artist: localUpdatedComedian.name,
                                   description: localUpdatedComedian.description});
 }

 deleteComedian(localComedianToDelete) {
      var comedianEntryInFirebase = this.getComedianById(localComedianToDelete.$key);
      comedianEntryInFirebase.remove();
    }

}
