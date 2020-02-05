export class SetUpUser {
    name: string;
    surname: string;
    age: number;
    email: string;
    telephoneNumber: number;
    password: string;

    constructor(name: string, surname: string, age: number, email: string, telephoneNumber: number, password: string) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.email = email;
        this.telephoneNumber = telephoneNumber;
        this.password = password;
    }
}
