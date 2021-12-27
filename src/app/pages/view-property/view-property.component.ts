import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/app/services/property/property.service';
import { BookNowComponent } from '../book-now/book-now.component';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {

  public property: any;
  private propertyId: string;
  constructor(private route: ActivatedRoute, private propertyService: PropertyService, public dialog: MatDialog) {
    this.propertyId = '' + this.route.snapshot.paramMap.get('id');
    this.getPropertyById(this.propertyId);
  }

  ngOnInit(): void {
  }

  getPropertyById(id: string){
    this.propertyService.getPropertyById(this.propertyId).subscribe(
      (response) => {
        this.property = response;
        console.log(this.property);
      },
      (error: HttpErrorResponse) =>{
        console.log(error.message);
      }
    );
  }

  openDialog(){
    this.dialog.open(BookNowComponent);
  }

}
