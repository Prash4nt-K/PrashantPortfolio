import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skills: string[] =[
    "Java", 
    "Spring Boot", 
    "Angular", 
    "Node Js",
    "Express Js",
    "JavaScript",
    "TypeScript",  
    "MySql", 
    "MongoDB", 
    "Socket IO", 
    "HTML",
    "CSS",
    "Bootstrap",
    "RESTful API Development",
    "Git",
    "Problem Solving"
];

experienceItems:string[] = [
  "Implemented RESTful APIs to facilitate communication between frontend and backend systems.",
  "Utilized Spring Boot framework to build scalable and efficient backend services.",
  "Designed and maintained databases using MySQL, ensuring data integrity and optimal performance.",
  "Collaborated with cross-functional teams to gather requirements, analyze user needs, and deliver solutions that meet business objectives.",
  "Conducted code reviews, identified areas for improvement, and implemented best practices to enhance code quality and maintainability.",
  "Participated in Agile development sprints, contributing to sprint planning, daily stand-ups, and retrospectives."
]


}
