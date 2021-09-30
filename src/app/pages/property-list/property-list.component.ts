import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';
import { PropertyService } from 'src/app/services/property/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {

  propertyList: Property[];
  errorResponse: string;
  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    setTimeout(function () {
      document.getElementById('loading').style.display = 'none';
    }, 1000);
    setTimeout(function () {
      document.getElementById('satyam').style.display = 'block';
    }, 1300);

    // this.getAllProperty();
  }

  getAllProperty(){
    this.propertyService.getAllProperties().subscribe(
      (response) =>{
        console.log(response);

        this.propertyList = response;
      },
      (error: HttpErrorResponse) =>{
        this.errorResponse = error.message;
      }
    );
  }

}
