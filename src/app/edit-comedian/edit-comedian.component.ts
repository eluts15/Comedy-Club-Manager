import { Component, Input, OnInit } from '@angular/core';
import { ComedianService } from '../comedian.service';

@Component({
  selector: 'app-edit-comedian',
  templateUrl: './edit-comedian.component.html',
  styleUrls: ['./edit-comedian.component.css'],
  providers: [ComedianService]
})
export class EditComedianComponent implements OnInit {
  @Input() selectedComedian;

  constructor(private comedianService: ComedianService) { }

  ngOnInit() {
  }

  beginUpdatingComedian(comedianToUpdate) {
    this.comedianService.updateComedian(comedianToUpdate);
  }

  beginDeletingComedian(comedianToDelete) {
    if(confirm("Are you sure you want to delete this comedian?")) {
      this.comedianService.deleteComedian(comedianToDelete);
    }
  }

}
