import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email, Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  sendForm() {
    alert('enviado');
  }
}
