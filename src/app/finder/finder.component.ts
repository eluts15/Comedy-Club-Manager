import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comedian } from '../comedian.model';
import { ComedianService } from '../comedian.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css'],
  providers: [ComedianService]
})
export class FinderComponent implements OnInit{
  comedians: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private comedianService: ComedianService) { }

  ngOnInit() {
    this.comedians = this.comedianService.getComedians();
  }


  goToComedianPage(clickedComedian) {
    this.router.navigate(['comedians', clickedComedian.$key]);
  };
}
