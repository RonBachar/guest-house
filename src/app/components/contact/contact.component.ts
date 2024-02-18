import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import emailjs from '@emailjs/browser';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  sending: boolean = false;

  form: FormGroup = this.fb.group({
    from_name: ["", Validators.required],
    to_name: ["Admin"],
    from_email: ["", [Validators.required, Validators.email]],
    subject: ["", Validators.required],
    message: ["", Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    emailjs.init('Si5ThGtU3xZNTu9z_'); // Initializing EmailJS in ngOnInit
  }

  async send() {
    if (this.form.valid) {
      let response = await emailjs.send("service_fja38a7", "template_0seyoii", {
        from_name: this.form.value.from_name,
        to_name: this.form.value.to_name,
        from_email: this.form.value.from_email,
        subject: this.form.value.subject,
        message: this.form.value.message,
      });

      alert('Message has been sent');
      this.form.reset();
    } else {
      alert('Please fill in all the fields');
    }
  }
}
