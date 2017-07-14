import { Component, OnInit } from '@angular/core';
import { ComedianService } from '../comedian.service';
import { Comedian } from '../comedian.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ComedianService]
})
export class AdminComponent implements OnInit {

  constructor(private comedianService: ComedianService) { }

  ngOnInit() {
  }

  submitForm(title: string, name: string, description: string) {
   var newComedian: Comedian = new Comedian(title, name, description);
   this.comedianService.addComedian(newComedian);
 }

}
