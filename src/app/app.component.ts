import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-material-tailwind';
}
