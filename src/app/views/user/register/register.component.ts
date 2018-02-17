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
  @ViewChild('f') loginForm: NgForm;
  user: User;
  v_password: String;

  errorFlag = false;
  errorMsg = 'Password mis-matching!';

  constructor(private userService: UserService, private router: Router) { }

  register() {
    if (this.v_password === this.user.password) {
      this.errorFlag = false;
      this.user = this.userService.createUser(this.user);
      this.router.navigate(['/profile', this.user._id]);
    } else {
      this.errorFlag = true;
    }
  }
  cancel() {
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.user = UserService.getNewUser();
  }


}
