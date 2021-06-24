export enum Role {
  User = 'user',
  Admin = 'admin',
}

export interface User {
  name: string;
  username: string;
  password: string;
  role: Role;
  lastSeen: Date;
}
