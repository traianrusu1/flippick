import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'test@test.com',
      password: '1234',
    },
    {
      userId: 2,
      username: 'test1@test.com',
      password: '0987',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
