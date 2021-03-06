import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { SettingsService } from 'src/app/core/services/settings.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css'],
})
export class TitlebarComponent implements AfterViewInit {
  title = 'Kanban Board';
  isDarkMode: boolean;
  isSearchEnabled: boolean;

  @ViewChild('search_toggle') searchToggle: MatSlideToggle | undefined;
  @ViewChild('dark_mode_toggle') darkModeToggle: MatSlideToggle | undefined;

  private darkClassName = 'darkMode';

  constructor(
    private overlay: OverlayContainer,
    private settingsService: SettingsService,
    private authService: AuthService
  ) {
    this.isSearchEnabled = this.settingsService.searchEnabled;
    this.isDarkMode = this.settingsService.darkMode;
    if (this.isDarkMode) {
      this.overlay.getContainerElement().classList.add(this.darkClassName);
    }
  }

  ngAfterViewInit(): void {
    this.darkModeToggle?.change.subscribe(() => {
      this.settingsService.darkMode = this.isDarkMode;
      if (this.isDarkMode) {
        this.overlay.getContainerElement().classList.add(this.darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(this.darkClassName);
      }
    });
    this.searchToggle?.change.subscribe(() => {
      this.settingsService.searchEnabled = this.isSearchEnabled;
    });
  }

  public onLogout(): void {
    this.authService.logoutUser();
  }
}
