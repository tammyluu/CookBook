
export class User {
    constructor(id,fullName,avatar, email, password, isLoggedIn) {
        this.id = id;
        this.fullName = fullName;
        this.avatar = avatar;
        this.email = email;
        this.password = password;
        this.isLoggedIn = isLoggedIn;
}
}