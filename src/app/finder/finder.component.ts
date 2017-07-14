import { Component } from '@angular/core';
import { Comedian } from '../comedian.model';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent {
  comedians: Comedian[] = [
     new Comedian("Popular Comedians", "Kevin Hart", "Makes people laugh severely.", 1),
     new Comedian("Podcasting Elite", "Joe Rogan", "Makes people question life... and makes people laugh.", 2),
     new Comedian("Series Regulars", "T.J. Miller", "Makes people laugh a lot", 3),
     new Comedian("Stand-Up Legends", "Chris Rock", "Is a legend.", 4),
     new Comedian("Stand-Up Legends", "Dave Chappelle", "Is a legend.", 5)
  ];
}
