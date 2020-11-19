export interface User {
    name: string;
    email: string;
    password: string;
}

export class Admin implements User {
    name: string = '';
    email: string = '';
    password: string = '';
}

export interface Destructor {
    delete(): void;
}

export interface Duplicator {
    duplicate(): void;
}

export interface Twice extends Destructor, Duplicator {
    remove(): void;
}

export class Corbeille {
    destroy(obj: Destructor) {
        obj.delete();
        console.log('objet détruit');
    }
}

export class Jpeg implements Destructor, Duplicator {
    delete(): void {
        console.log('Jpeg image has been deleted');
    }
    duplicate(): void {
        console.log('Jpeg was duplicated');
    }
}

export class Mp3 implements Destructor {
    delete(): void {
        console.log('Mp3 has been deleted');
    }
}

export class Canard implements Destructor {
    delete(): void {
        console.log("J'ai supprimer un canard");
    }
}

export class DBTable implements Destructor {
    delete(): void {
        const sql = 'DELETE FROM table';
        console.log(sql);
    }
}

const corbeille = new Corbeille();
const image = new Jpeg();
const audio = new Mp3();
const can = new Canard();
const db = new DBTable();

corbeille.destroy(image);
corbeille.destroy(audio);
corbeille.destroy(can);
corbeille.destroy(db);
