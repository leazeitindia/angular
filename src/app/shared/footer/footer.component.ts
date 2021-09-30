import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubscriptionService } from 'src/app/services/subscription/subscription.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  formValidationMessage: string;
  formResponseMessage: string;
  formErrorMessage: string;
  subscriptionForm: FormGroup;

  constructor(private subscriptionService: SubscriptionService) {
    this.subscriptionForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {}


  subscribeNewsLetter(){
    if (this.subscriptionForm.invalid){
      this.formValidationMessage = "Please enter a valid email";
      return;
    }
    this.formValidationMessage = "";
    this.subscriptionService.subscribeNewsLetter(this.subscriptionForm.value).subscribe(
      (response) => {
        this.subscriptionForm.reset;
        this.formResponseMessage = "Subscribed successfully!"
        this.formErrorMessage = "";
      },
      (error: HttpErrorResponse) => {
        this.formResponseMessage = "Subscribed successfully."
        this.formErrorMessage = "";
        this.subscriptionForm.reset;
        // this.formErrorMessage = error.error.errorDetails;
        // this.formResponseMessage="";
      }
    );

  }
}
