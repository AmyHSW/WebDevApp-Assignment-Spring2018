import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  user: any;
  v_password: String;

  errorFlag: boolean;
  errorMsg: String;

  constructor(private userService: UserService, private router: Router) { }

  register() {
    this.user.username = this.registerForm.value.username;
    this.user.password = this.registerForm.value.password;
    this.v_password = this.registerForm.value.v_password;

    this.errorFlag = false;

    this.userService.findUserByUsername(this.user.username).subscribe(
      (user: any) => {
        if (user != null) {
          this.errorFlag = true;
          this.errorMsg = 'The username already exists! Please use a different name.';
        } else if (this.v_password !== this.user.password) {
          this.errorFlag = true;
          this.errorMsg = 'Password mis-matching!';
        } else {
          return this.userService.register(this.user.username, this.user.password)
            .subscribe(
              (newUser: any) => {
                this.router.navigate(['/profile']);
              }, (error: any) => {
                this.errorMsg = error._body;
              }
            );
        }
      });
  }
  cancel() {
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.user = UserService.getNewUser();
  }

}
