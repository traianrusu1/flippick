import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
const bcrypt = require('bcrypt');
const saltRounds = 10;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'test@test.com',
      password: '123456',
    },
    {
      userId: 2,
      username: 'test1@test.com',
      password: '098765',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
