import { Role, User } from './user';

export class FakeUsersDb {
  users: User[] = [
    {
      name: 'asdf',
      username: 'asdf@ytl.com',
      password: 'asdf',
      role: Role.User,
      lastSeen: new Date('2021-06-24'),
    },
  ];

  constructor() {}

  select(username: string) {
    if (username === undefined) return this.users;
    const find = this.users.filter((s) => s.username === username);
    return find.length ? find : [];
  }
}
