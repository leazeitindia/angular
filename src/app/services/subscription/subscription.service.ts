import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from 'src/app/models/subscription';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  baseUrl: string = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  subscribeNewsLetter(subscription: Subscription): Observable<any> {
    return this.http.post<string>(
      `${this.baseUrl}/subscriptions/add`,
      subscription
    );
  }

  getAllSubscribers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/subscriptions/get`);
  }
}
