import { Component, Input ,Output,EventEmitter } from '@angular/core';
import { course } from 'src/model/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

 @Input({required:true}) course !: course; 

 @Input({alias:'sno',required:true}) no : number = 0;  


 @Output() courseClicked = new EventEmitter<course>(); 

onCourseView(){
  console.log('Clicked on course view btn.');
  this.courseClicked.emit(this.course)
}

getCssClass(){
 // console.log(this.course.category.toLowerCase() )
  return {'addSalmonBg': this.course.category?.toLowerCase() == 'expert'}
}
getStyleForHeading(){
  return this.course.category?.toLowerCase() == 'expert' ? {'color' : 'red','text-decoration':'underline'} : {'color' : 'blue'}
}

}
