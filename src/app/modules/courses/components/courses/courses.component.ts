import { Component, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];

  constructor() { }

  ngOnInit(): void {
    this.courses = coursesMock;
  }

}

const coursesMock: Course[] = [
  {
    title: 'Angular',
    description: 'Course Description',
    creationDate: new Date('10/10/2000'),
    duration: 10,
    authors: ['Niko Kovac', 'Bill Wellington', 'Amar Bose']
  },
  {
    title: 'React',
    description: 'Course Description',
    creationDate: new Date('2/2/1990'),
    duration: 99,
    authors: ['Niko Kovac', 'Amar Bose']
  },
  {
    title: 'Vue JS',
    description: 'Course Description',
    creationDate: new Date('11/11/2001'),
    duration: 121,
    authors: ['Lando Norris', 'Jim Bim', 'Sponge Bob']
  },
]
