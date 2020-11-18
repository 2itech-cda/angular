import { Animal } from './Animal';

export default class Parc {
    animals: Array<Animal> = [];

    add(a: Animal) {
        this.animals.push(a);
    }
}
