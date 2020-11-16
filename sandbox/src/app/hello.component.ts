import { Component } from "@angular/core";

// l'arobase est un symbole qui siginifi un décorateur.

// @Component est un décorateur
@Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.scss'],
    template: `
        <h1>Hello {{ name }}</h1>
        <p>Lorem Ipsum</p>
    `
})
export class AppHelloComponent {
    // une liaison entre la classe et le template qui représente la vue graphique

    name = 'toto';
}

