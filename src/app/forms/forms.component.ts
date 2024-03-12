import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  registerForm = this.fb.group({
    username: ['', Validators.required,],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    roleId: [1, Validators.required],
  });
  isSubmitted = false;
  roles = [
    { id: 1, title: 'Front end developer' },
    { id: 2, title: 'Back end developer' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm.get('roleId')?.valueChanges.subscribe((roleId) => {
      console.log('SEND API REQUEST AND UPDATE ROLE', roleId);
    });
  }

  onSubmit(): void {
    console.log(
      'submitted form',
      this.registerForm.value,
      this.registerForm.invalid
    );

    alert(
      this.registerForm.value.email
    )

    this.isSubmitted = true;
  }

}
