import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Comedian } from '../comedian.model';
import { ComedianService } from '../comedian.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-comedian-detail',
  templateUrl: './comedian-detail.component.html',
  styleUrls: ['./comedian-detail.component.css'],
  providers: [ComedianService]
})
export class ComedianDetailComponent implements OnInit {
  comedianId: string;
  comedianToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private comedianService: ComedianService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.comedianId = urlParameters['id'];
    });
    this.comedianToDisplay = this.comedianService.getComedianById(this.comedianId);
  }

}
