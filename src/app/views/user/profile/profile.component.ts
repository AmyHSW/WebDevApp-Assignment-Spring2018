import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user: User;
  updateFlag: boolean;
  updateMsg: String;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  updateUser() {
    this.userService.updateUser(this.user._id, this.user).subscribe(
      (user: User) => {
        this.user = user;
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
      (user: User) => {
        console.log('delete user: ' + this.user._id);
        this.router.navigate(['/login']);
      },
      (error: any) => console.log(error)
    );
  }
  ngOnInit() {
    this.updateFlag = false;
    this.updateMsg = 'Profile updated!';

    this.activatedRoute.params.subscribe((params: any) => {
      return this.userService.findUserById(params['uid']).subscribe(
        (user: User) => {
          this.user = user;
        },
        (error: any) => {
          console.log(error);
        }
      );
    });
  }
}
