import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Produto } from './features/produtos/produto/produto';


@Component({
selector: 'app-root',
imports: [RouterOutlet, RouterLink],
templateUrl: './app.html',
styleUrl: './app.css',
})
export class App {
protected readonly title = signal('meu-primeiro-app');
}