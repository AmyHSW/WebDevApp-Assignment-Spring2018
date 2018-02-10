import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  errorFlag: boolean;
  errorMsg = 'Password mis-matching!';

  constructor(private userService: UserService) { }

  register(v_password: String) {
    if (v_password === this.user.password) {
      this.errorFlag = false;
      this.userService.createUser(this.user);
    } else {
      this.errorFlag = true;
    }
  }
  ngOnInit() {
  }

}
