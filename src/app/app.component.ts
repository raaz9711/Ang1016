import { AfterViewInit, Component, ElementRef, ViewChild, ViewChildren ,QueryList} from '@angular/core';
import { COURSES } from 'src/data/db-data';
import { course } from 'src/model/course.model';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit {
  title = 'ang-app';
  courses = COURSES;

  @ViewChildren(CourseCardComponent)  cards !:  QueryList<CourseCardComponent>;

    ngAfterViewInit() { 
      console.log(this.cards.first)
      this.cards.changes.subscribe( (r) => {
        console.log(r);
      })
    }
    
    onCardAdd() {
      this.courses.push({...this.courses[0],id:this.courses.length + 1});
    }



  //   constructor(){
// //  console.log('div',this.containerDiv);
// //  console.log(this.card1);

//   }
//   startDate = new Date(2000,0,1)

//   // @ViewChild('cardRef1',{read : ElementRef}) card1 !: ElementRef;
//   // //cardbody
//   // @ViewChild('cardbody',{read : ElementRef}) cardbody !: ElementRef;

//   // @ViewChild('cardRef2') card2 !: CourseCardComponent;
//   // @ViewChild('container') containerDiv !: ElementRef;
//    ngAfterViewInit() {
// //  console.log('div',this.containerDiv);
// //  console.log(this.card1);
// //  console.log(this.cardbody)

//   }

//   oncourseClicked(course : course) {
//   // console.log(this.card1);
//   // console.log(this.card2);

// // console.log('div',this.containerDiv);
//     // console.log('test bubbled up !',course)
//   }
}
