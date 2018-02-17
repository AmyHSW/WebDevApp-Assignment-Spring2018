import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  users: User[] = [
    new User('123', 'alice', 'alice', 'alice@test.com', 'Alice', 'Wonder'),
    new User('234', 'bob', 'bob', 'bob@test.com', 'Bod', 'Marley'),
    new User('345', 'charlie', 'charly', 'charlie@test.com', 'Charly', 'Garcia'),
    new User('456', 'jannunzi', 'jannunzi', 'jannunzi@test.com', 'Jose', 'Annunzi')
  ];

  static getNewUser() {
    return new User(undefined, undefined, undefined, undefined, undefined, undefined);
  }

  createUser(user: User) {
    user._id = Math.random() + '';
    this.users.push(user);
    return user;
  }

  findUserByCredential(username: String, password: String) {
    return this.users.find( function (user) {
      return user.username === username && user.password === password;
    });
  }

  findUserByUsername(username: String) {
    return this.users.find(function (user) {
      return user.username === username;
    });
  }

  findUserById(userId: String) {
    return this.users.find(function(user) {
      return user._id === userId;
    });
  }

  updateUser(userId: String, user: User) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === user._id) {
        this.users[i].email = user.email;
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
        return this.users[i];
      }
    }
  }

  deleteUserById(userId: String) {
    for (const i in this.users) {
      if (this.users[i]._id === userId) {
        const j = +i;
        this.users.splice(j, 1);
      }
    }
  }
}
