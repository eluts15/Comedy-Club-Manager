import { Component, OnInit } from '@angular/core';
import { Comedian } from '../comedian.model';
import { Router } from '@angular/router';
import { ComedianService } from '../comedian.service';


@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css'],
  providers: [ComedianService]
})
export class FinderComponent implements OnInit{
  comedians: Comedian[];

  constructor(private router: Router, private comedianService: ComedianService) {}

  ngOnInit() {
    this.comedians = this.comedianService.getComedians();
  }


  goToComedianPage(clickedComedian: Comedian) {
    this.router.navigate(['comedians', clickedComedian.id]);
  };
}
