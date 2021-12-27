import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';
import { PropertyService } from 'src/app/services/property/property.service';
import {MatSelectModule} from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {

  propertyList;
  errorResponse: string;
  constructor(private propertyService: PropertyService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.getPropertyByCity("all");
    setTimeout(function () {
      document.getElementById('loading').style.display = 'none';
    }, 1000);
    setTimeout(function () {
      document.getElementById('satyam').style.display = 'block';
    }, 1300);
  }

  // getPropertyByCity(city: string){
  //   this.propertyList = this.propertyService.getPropertyByCity(city);
  //   console.log(city);
  //   console.log(this.propertyList);
  // }
  getPropertyByCity(city: string){
    this.propertyService.getPropertyByCity(city).subscribe(
      (response) => {
        this.propertyList = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }


}
