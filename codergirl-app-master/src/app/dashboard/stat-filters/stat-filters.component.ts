import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cg-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent {
  details: FormGroup;


  constructor(fb: FormBuilder) {
    this.details = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleInitial: ['', Validators.maxLength(1)],
      favoriteMovie: ['', Validators.minLength(3)],
      favoriteColor: ['', Validators.minLength(3)],
      fakePhoneNumber: ['', Validators.pattern(/^\d{3}-\d{3}-\d{4}$/)]
    });
   }
   saveStatDetails(): void {
     console.log('Form Submitted', this.details, this.details.value);
   }
}
