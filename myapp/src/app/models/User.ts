export class User {
    name: string = '';
    email: string = '';
    role: number = 0;
    date_created: Date = new Date();
    date_updated: Date = new Date();
}

export class UserRegister {
    name: string = '';
    email: string = '';
    password: string = '';
}

export class UserLogin {
    name: string = '';
    password: string = '';
}
