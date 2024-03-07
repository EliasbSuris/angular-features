import { Component, EventEmitter, Output, computed, effect, signal } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { matDarkModeOutline, matLightModeOutline } from '@ng-icons/material-icons/outline';
import { ObjectValues } from '@custom-types/utils.types';

const THEME = {
  DARK: 'Dark',
  LIGHT: 'Light',
} as const;

export type Theme = ObjectValues<typeof THEME>;

const INITIAL_THEME = THEME.DARK;

@Component({
  selector: 'aor-header',
  standalone: true,
  imports: [HlmButtonDirective, NgIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [provideIcons({ matDarkModeOutline, matLightModeOutline })],
})
export class HeaderComponent {
  @Output()
  readonly changeTheme = new EventEmitter<Theme>();

  readonly THEME = THEME;
  readonly activeTheme = signal<Theme>(THEME.DARK);
  readonly title = 'angular-features';

  readonly isDarkTheme = computed(() => this.activeTheme() === THEME.DARK);
  readonly isLightTheme = computed(() => this.activeTheme() === THEME.LIGHT);

  constructor() {
    effect(() => {
      this.changeTheme.next(this.activeTheme());
    });
    this.setTheme(INITIAL_THEME);
  }

  setTheme(newTheme: Theme): void {
    this.activeTheme.set(newTheme);
  }
}
