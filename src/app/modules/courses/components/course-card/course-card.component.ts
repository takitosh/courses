import {Component, Input, OnInit} from '@angular/core';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course = {};

  model: Course = {};

  constructor() { }

  ngOnInit(): void {
    this.model = {
      title: this.course.title,
      description: this.course.description,
      creationDate: this.course.creationDate,
      duration: this.course.duration,
      authors: this.course.authors
    }
  }

}
