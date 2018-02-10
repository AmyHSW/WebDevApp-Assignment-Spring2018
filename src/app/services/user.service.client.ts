import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  users: User[] = [
    new User('123', 'alice', 'alice', 'Alice', 'Wonder'),
    new User('234', 'bob', 'bob', 'Bod', 'Marley'),
    new User('345', 'charlie', 'charly', 'Charly', 'Garcia'),
    new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi')
  ];

  createUser(user: User) {
    this.users.push(new User(user._id, user.username, user.password, user.firstName, user.lastName));
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

  updateUser(user: User) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === user._id) {
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
