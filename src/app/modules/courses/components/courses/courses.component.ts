import { Component, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  isEditable: boolean = true;

  search(phrase: string) {
    console.log(phrase);
  }

  showCourse(id: string) {
    console.log("showCourse: " + id);
  }

  editCourse(id: string) {
    console.log("editCourse: " + id);
  }

  removeCourse(id: string) {
    console.log("removeCourse: " + id);
  }

  constructor() { }

  ngOnInit(): void {
    this.courses = coursesMock;
  }
}

const coursesMock: Course[] = [
  {
    id: "001",
    title: "Angular",
    description: "Course Description",
    creationDate: "10/10/2000",
    duration: 10,
    authors: ['Niko Kovac', 'Bill Wellington', 'Amar Bose']
  },
  {
    id: "002",
    title: "React",
    description: 'Course Description',
    creationDate: '2/2/1990',
    duration: 99,
    authors: ["Niko Kovac", "Amar Bose"]
  },
  {
    id: "003",
    title: "Vue JS",
    description: "Course Description",
    creationDate: "11/11/2001",
    duration: 121,
    authors: ["Lando Norris", "Jim Bim", "Sponge Bob"]
  },
  {
    id: "de5aaa59-90f5-4dbc-b8a9-aaf205c551ba",
    title: "JavaScript",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                    nchanged.`,
    creationDate: "8/3/2021",
    duration: 160,
    authors: ["Vasiliy Dobkin", "Nicolas Kim"],
  },
  {
    id: "b5630fdd-7bf7-4d39-b75a-2b5906fd0916",
    title: "Angular",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book.`,
    creationDate: "10/11/2020",
    duration: 210,
    authors: ["Anna Sidorenko", "Valentina Larina"],
  },
]
