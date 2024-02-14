import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'] // Fix typo: Use styleUrls instead of styleUrl
})

export class FooterComponent {

  inquiryForm: FormGroup; // Declare the FormGroup variable

  // email service is private 
  /*
   the constructor is a special method of a class that is automatically called when an instance of the class is created.
    It is primarily used for initializing the properties of the class or for injecting dependencies into the class
  */
  constructor(private fb: FormBuilder) {
    // Initialize the inquiryForm FormGroup with form controls
    this.inquiryForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email form control with validators
      message: ['', Validators.required] // Message form control with required validator
    });
  }

  // method that create an email data object
  onSubmit() {
    if (this.inquiryForm.valid) { // Check if the form is valid
      const emailData = {
        email: this.inquiryForm.value.email, // Get the email value from the form
        message: this.inquiryForm.value.message // Get the message value from the form
      };

    }
  }
}
