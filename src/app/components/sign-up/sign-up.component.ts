import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  emailField: FormControl;
  passwordField: FormControl;

  validation: boolean;

  
  constructor() {
    this.emailField = new FormControl('',[
      Validators.required,
      Validators.email
    ]);
    this.passwordField = new FormControl('',[
      Validators.required,
      Validators.minLength(10)
    ]
    );

    // this.emailField.valueChanges
    // .subscribe(value => {
    //   console.log(value)
    // });
  }
  
  ngOnInit(): void {
  }

}
