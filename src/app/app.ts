import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navmenu } from "./site/shared/navmenu/navmenu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navmenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp-products');
}
