import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  user: User;
  v_password: String;

  userErrorFlag = false;
  userErrorMsg = 'The username already exists! Please use a different name.';
  pwErrorFlag = false;
  pwErrorMsg = 'Password mis-matching!';

  constructor(private userService: UserService, private router: Router) { }

  register() {
    this.user.username = this.registerForm.value.username;
    this.user.password = this.registerForm.value.password;
    this.v_password = this.registerForm.value.v_password;

    if (this.userService.findUserByUsername(this.user.username)) {
      this.userErrorFlag = true;
    } else if (this.v_password !== this.user.password) {
      this.pwErrorFlag = true;
    } else {
      this.userService.createUser(this.user);
      this.router.navigate(['/profile', this.user._id]);
    }
  }
  cancel() {
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.user = this.userService.getNewUser();
  }

}
