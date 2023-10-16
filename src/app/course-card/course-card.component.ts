import { Component, Input } from '@angular/core';
import { course } from 'src/model/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

 @Input({required:true}) course !: course; 



}
