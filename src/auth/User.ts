export class User {
  id: string;
  email: string;
  username: string;
  groups: string[];

  constructor(jwtPayload: any) {
    (this.id = jwtPayload.sub),
      (this.email = jwtPayload.email),
      (this.username = jwtPayload["cognito:username"]),
      (this.groups = jwtPayload["cognito:groups"]);
  }

  public isInGroup(group: string): boolean {
    const groups = this.groups;
    return groups && groups.length > 0 && groups.includes(group);
  }
}

export default User;
