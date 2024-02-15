import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'] // Fix typo: Use styleUrls instead of styleUrl
})

export class FooterComponent {
  sending: boolean = false;

  form: FormGroup = this.fb.group({
    from_name: "",
    to_name: "Admin",
    from_email: "",
    subject: "",
    message: "",
  })

  constructor(private fb: FormBuilder) {

  }


  async send() {
    emailjs.init('Si5ThGtU3xZNTu9z_');
    let response = await emailjs.send("service_fja38a7", "template_0seyoii", {
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
    });

    alert('Message has been sent');
    this.form.reset();
  }
}
