import { Component } from '@angular/core';
import { COURSES } from 'src/data/db-data';
import { course } from 'src/model/course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-app';
  courses = COURSES;

  startDate = new Date(2000,0,1)

  oncourseClicked(course : course) {
    console.log('test bubbled up !',course)
  }
}
