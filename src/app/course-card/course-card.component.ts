import { Component, Input ,Output,EventEmitter } from '@angular/core';
import { course } from 'src/model/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

 @Input({required:true}) course !: course; 

 @Input({alias:'sno',required:true}) no !: number; 


 @Output() courseClicked = new EventEmitter<course>(); 

onCourseView(){
  console.log('Clicked on course view btn.');
  this.courseClicked.emit(this.course)
}

}
