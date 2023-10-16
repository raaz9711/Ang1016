import { Component } from '@angular/core';
import { COURSES } from 'src/data/db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-app';
  courses = COURSES;
}
