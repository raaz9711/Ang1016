import { Component, Input ,Output,EventEmitter, ContentChild, AfterViewInit, ElementRef, AfterContentInit, ContentChildren } from '@angular/core';
import { course } from 'src/model/course.model';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements AfterViewInit,AfterContentInit {

 @Input({required:true}) course !: course; 

 @Input({alias:'sno',required:true}) no : number = 0;  


 @Output() courseClicked = new EventEmitter<course>(); 

 @ContentChildren(CourseImageComponent) image !: CourseImageComponent;

 ngAfterViewInit(){
 // console.log(this.image)
 }

 ngAfterContentInit() {
  console.log(this.image)
 }



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
