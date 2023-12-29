import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  focus;
  focus1;
  loginError: string = '';
  rememberMe = false; 
   constructor(private authService: AuthService, private router: Router) { }
  
   user1: any;
  

  ngOnInit() {}
  user = {
    email: '',
    password: ''
  };
  onSubmit(loginForm: NgForm) {
    
    if (loginForm.valid) {
      const email = this.user.email;
      const password = this.user.password;
      this.authService.login(email, password, this.rememberMe).subscribe(
        (response) => {      
              this.authService.setUserData(response); 

          console.log('User logged in successfully!');
          const token = response.accessToken;
          if (this.rememberMe) {

            this.authService.setCurrentUser(this.user1);
            localStorage.setItem('access_token', token);
            
          } else {
            console.log("token"+token)

            sessionStorage.setItem('access_token', token);
          }
         
          const userAuthorities = response.authorities.map((authority) => authority.authority);
          
          if (userAuthorities.includes("ROLE_Entreprise")) {

            this.router.navigate(['/landing']);
          } else {
            this.router.navigate(['/landing']); 
          }
        
        },
        (error) => {
          console.error('Invalid email or password. Please try again.');
          this.loginError = 'Invalid email or password. Please try again.';

        }
        );
      } else {
        console.log('Form is invalid. Please check your inputs.');
      }
    }


}
