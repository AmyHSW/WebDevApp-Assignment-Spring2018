import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user: any;
  username: String;
  updateFlag: boolean;
  updateMsg: String;
  userErrorFlag: boolean;
  userErrorMsg: String;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  updateUser() {
    this.updateFlag = false;
    this.userErrorFlag = false;
    if (this.username !== this.user.username) {
      this.userService.findUserByUsername(this.username).subscribe(
        (user: any) => {
          if (typeof user._id !== 'undefined') {
            this.userErrorFlag = true;
          } else {
            this.user.username = this.username;
            this.update();
          }
        },
        (error: any) => console.log(error)
      );
    } else {
      this.update();
    }

  }
  update() {
    this.userService.updateUser(this.user._id, this.user).subscribe(
      (response: any) => {
        this.updateFlag = true;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  logout() {
    this.router.navigate(['/login']);
  }
  delete() {
    this.userService.deleteUser(this.user._id).subscribe(
      (response: any) => {
        console.log('delete user: ' + this.user._id);
        this.router.navigate(['/login']);
      },
      (error: any) => console.log(error)
    );
  }
  ngOnInit() {
    this.updateFlag = false;
    this.userErrorFlag = false;
    this.updateMsg = 'Profile updated!';
    this.userErrorMsg = 'The username already exists! Please use a different name.';

    this.activatedRoute.params.subscribe((params: any) => {
      return this.userService.findUserById(params['uid']).subscribe(
        (user: any) => {
          this.user = user;
          this.username = this.user.username;
        },
        (error: any) => {
          console.log(error);
        }
      );
    });
  }
}
