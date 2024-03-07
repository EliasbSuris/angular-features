import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent, Theme } from '@shell/header/header.component';

@Component({
  selector: 'aor-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {
    '[class]': 'themeClass',
  },
})
export class AppComponent {
  themeClass: string = 'adios';
  onChangeTheme(newTheme: Theme): void {
    this.themeClass = newTheme.toLowerCase();
  }
}
