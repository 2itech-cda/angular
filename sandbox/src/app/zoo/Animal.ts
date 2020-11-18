export abstract class Animal {
    id: number = 0;
    name: string = '';
    age: number = 0;
}

export abstract class Felin extends Animal {

}

export class A {
    title: string = 'test A';

    constructor(title: string) {
        this.title = title;
        console.log(this.title);
    }
}

export class B extends A {
    constructor(title: string) {
        super(title);
    }
}
