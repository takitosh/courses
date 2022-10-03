import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  data = {
    title: 'Course Name',
    description: 'Course Description',
    creationDate: new Date(),
    duration: 99,
    authors: ['Niko Kovac', 'Bill Wellington', 'Amar Bose']
  }

  constructor() { }

  ngOnInit(): void {
  }

}
