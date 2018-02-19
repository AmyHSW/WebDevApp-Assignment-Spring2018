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
  updateFlag = false;
  updateMsg = 'Profile updated!';

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  updateUser() {
    this.user = this.userService.updateUser(this.user._id, this.user);
    this.updateFlag = true;
  }
  logout() {
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params['uid']);
      this.user = this.userService.findUserById(params['uid']);
    });
  }

}
