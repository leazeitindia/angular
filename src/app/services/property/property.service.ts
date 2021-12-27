import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from 'src/app/models/property';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  baseUrl: string = environment.apiBaseUrl;
  allProperties = [
    {id:1,propertyName:"Abc", city: "jalandhar"},
    {id:2,propertyName:"Pqr", city: "jalandhar"},
    {id:3,propertyName:"Xyz", city: "jalandhar"},
    {id:1,propertyName:"Def", city: "phagwara"},
    {id:2,propertyName:"Ghi", city: "phagwara"},
    {id:3,propertyName:"Jkl", city: "phagwara"},
  ];

  constructor(private http: HttpClient) {}


  // getPropertyByCity(city: string): Property[]{
  //   const result = this.allProperties.filter(property => property.city === city);
  //   if(city === "all"){
  //     return this.allProperties;
  //   }
  //   else{
  //     return result;
  //   }
  // }

  getPropertyByCity(city: string) : Observable<any>  {
    if(city === "all") return this.http.get(`${this.baseUrl}/property/listAll`);
    else return this.http.get(`${this.baseUrl}/property/listCity?city=${city}`);
  }

  getPropertyById(id: string) : Observable<any>  {
    return this.http.get(`${this.baseUrl}/property/listId?id=${id}`);
  }

}
