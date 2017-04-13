class User {
  constructor(user_info) {
    this.name = user_info.name;
    this.github = user_info.github;
    this.id = user_info.id;
    this.token = user_info.token;
    this.cohort = user_info.cohort;
  }
}

export default User;
