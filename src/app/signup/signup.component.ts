import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/auth.service';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus: boolean = false;
    focus1: boolean = false;
    focus2: boolean = false;
    agreePrivacy: boolean = false;
    user = {
      name: '',
      username: '',
      email: '',
      password: ''
    };
    signupError: string = '';
  
    constructor(private authService: AuthService, private router: Router) { }
    ngOnInit() {}
    onSubmit(signupForm: NgForm) {
        if (signupForm.valid && this.agreePrivacy) {
          const user = {
            name: this.user.name,
            username: this.user.username, 
            email: this.user.email,
            password: this.user.password,
            blocked: false, 
            address: 'TUNISIA', 
            valid: false ,
            role: [{
              id: 1,
              name: 'ROLE_Employee',

            }]
          };
      
          this.authService.signupEmployee(user).subscribe(
            (response) => {
              console.log('User registered successfully!');
              if (response && response.jwtToken) {
                const token = response.jwtToken;
                localStorage.setItem('token', token);
              }
              alert('check your mail account for verification !');
              this.router.navigate(['/']); 

            },
            (error) => {
              console.error('Error during registration.', error);
              alert('check your mail account for verification !');
              this.signupError = 'Error during registration. Please try again.';
            }
          );
        } else {
          console.log('Form is invalid or Privacy Policy not agreed.');
        }
      }
      
      
}
