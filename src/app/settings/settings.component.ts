import { Component } from '@angular/core';
import { MENU_SETTING } from './settings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  data = MENU_SETTING;
  constructor(private router: Router,
  ) { }

  ngOnInit(): void { }

 

  goToRoute(route: string) {
    this.router.navigate([route]);
  }
}
